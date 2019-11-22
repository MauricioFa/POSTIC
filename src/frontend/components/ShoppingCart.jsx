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
} from '../actions/indexActions';
import '../assets/styles/ShoppingCart.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(2, 0, 2),
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
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  selectCustomer: {
    color: '#0000EE',
  },
}));

const ShoppingCart = (props) => {
  const classes = useStyles();
  const { cart, checkoutTotalCart, customersList, ordersList } = props;
  const history = useHistory();

  useEffect(() => {
    props.calcCheckoutTotalCart();
  }, [cart]);

  const handleCartItems = (elementId) => {
    props.removeFromCart(elementId);
  };

  const [selectCustomerById, setSelectCustomerById] = useState('');
  const handleChangeSelectCustomerById = (customerToPay) => {
    setSelectCustomerById(customerToPay);
  };

  const generateInvoice = () => {
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
        sessionStorage.setItem('currentOrderNumber', newOrderDo.orderNumber.toString());
        history.push('/createInvoice');
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
            <Button onClick={generateInvoice}>{`Facturar: $ ${checkoutTotalCart}`}</Button>
          </Paper>

          <SelectReact
            className={classes.selectCustomer}
            name='selectCustomerByIdShopping'
            value={selectCustomerById}
            onChange={handleChangeSelectCustomerById}
            placeholder='Identificación del Cliente'
            options={customersList.map((option) => ({
              value: option,
              label: `${option.idType} ${option.id}`,
            }))}
          />
        </Grid>

        <Typography variant='h6' className={classes.title}>
          Artículos a facturar
        </Typography>

        <div className='Checkout-content'>
          {cart.length > 0 ? ' ' : <h2>Sin Pedidos</h2>}
          {cart.map((item) => {
            return (
              <div key={item.sku} className='Checkout-item'>
                <div className='Checkout-element'>
                  <h4>{item.name}</h4>
                  <span>{item.amount}</span>
                  <span>{item.checkoutPartial}</span>
                </div>
                <DeleteIcon onClick={() => handleCartItems(item.sku)} />
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
  };
};

const mapDispathToProps = {
  removeFromCart,
  calcCheckoutTotalCart,
  addToOrdersList,
  cleanCartBillDo,
};

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCart);
