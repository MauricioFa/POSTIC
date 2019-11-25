import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SelectReact from 'react-select';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  removeFromCart,
  calcCheckoutTotalCart,
  addToOrdersList,
  cleanCartBillDo,
  orderNumToPrintByBill,
} from '../actions/indexActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(1, 0, 1),
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    background: '#009688',
    '& Button': {
      color: 'white',
      fontSize: '1.4em',
      width: '100%',
      textTransform: 'capitalize',
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  selectCustomer: {
    color: '#0000EE',
  },
  checkout: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: '2rem',
  },
  checkoutItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px',
  },
  checkoutElement: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontSize: '1.2em',
    borderBottom: '1px solid #eee',
    '& h4': {
      margin: '2px',
    },
  },
}));

const ShoppingCart = (props) => {
  const { cart, checkoutTotalCart, customersList, ordersList, productsList } = props;
  const history = useHistory();
  const classes = useStyles();
  const [selectCustomerById, setSelectCustomerById] = useState('');
  const [optionsIDs, setOptionsIDs] = useState([]);

  useEffect(() => {
    props.calcCheckoutTotalCart();
  }, [cart]);

  useEffect(() => {
    const newOptions = customersList.map((option) => ({
      value: option,
      label: `${option.idType} ${option.id}`,
    }));
    setOptionsIDs(newOptions);
  }, [customersList]);

  const handleChangeSelectCustomerById = (customerToPay) => {
    setSelectCustomerById(customerToPay);
  };

  const handleCartItems = (productToRemove) => {
    const newProductsList = productsList.map((item) =>
      productToRemove.sku === item.sku ? { ...item, inStock: item.inStock + productToRemove.amount } : item
    );
    props.removeFromCart({ productToRemove, newProductsList });
  };

  const onClickGenInvoice = () => {
    if (selectCustomerById) {
      if (cart.length > 0) {
        const { idType, id, name, surname } = selectCustomerById.value;
        let orderNumber = ordersList.slice(-1);
        orderNumber = orderNumber.length > 0 ? orderNumber[0].orderNumber + 1 : 1;
        let today = new Date();
        // eslint-disable-next-line prettier/prettier
        today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}.${today.getMilliseconds()}`;
        const newOrderDo = {
          orderNumber,
          date: today,
          customer: { idType, id, name, surname },
          checkoutTotal: checkoutTotalCart,
          soldProducts: cart,
        };

        props.addToOrdersList(newOrderDo);
        setSelectCustomerById('');
        props.cleanCartBillDo();
        props.orderNumToPrintByBill(newOrderDo.orderNumber);
        history.push('/invoicepdf');
      } else {
        alert('Agregue al menos un producto a la Factura');
      }
    } else {
      alert('Seleccione un cliente valido\nsi no existe, deberá crearlo');
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button onClick={onClickGenInvoice}>{`Facturar: $ ${checkoutTotalCart}`}</Button>
          </Paper>
          <SelectReact
            className={classes.selectCustomer}
            name='selectCustomerByIdShopping'
            value={selectCustomerById}
            onChange={handleChangeSelectCustomerById}
            placeholder='Identificación del Cliente'
            options={optionsIDs}
          />
        </Grid>

        <Typography variant='h6' className={classes.title}>
          Artículos a facturar
        </Typography>

        <div className={classes.checkoutContent}>
          {cart.length > 0 ? ' ' : <h2>Sin Pedidos</h2>}
          {cart.map((item) => {
            return (
              <div key={item.sku} className={classes.checkoutItem}>
                <div className={classes.checkoutElement}>
                  <h4>
                    {item.name} ... <span>(x{item.amount})</span>
                  </h4>
                  <span>$ {item.checkoutPartial}</span>
                </div>
                <DeleteIcon fontSize='large' onClick={() => handleCartItems(item)} />
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCartList,
    checkoutTotalCart: state.checkoutTotalCart,
    customersList: state.customersList,
    ordersList: state.ordersList,
    productsList: state.products,
  };
};

const mapDispathToProps = {
  removeFromCart,
  calcCheckoutTotalCart,
  addToOrdersList,
  cleanCartBillDo,
  orderNumToPrintByBill,
};

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCart);
