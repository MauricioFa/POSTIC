/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Button, FormControl, Select, InputLabel } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromCart, calcCheckoutTotalCart } from '../actions/indexActions';
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
  formControl: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const ShoppingCart = (props) => {
  const classes = useStyles();
  const { cart, checkoutTotalCart, customersList } = props;

  useEffect(() => {
    props.calcCheckoutTotalCart();
  }, [cart]);

  const handleCartItems = (elementId) => {
    props.removeFromCart(elementId);
  };

  const [selectIdCustomer, setSelectIdCustomer] = useState('');
  const handleChangeSelectIdCustomer = (event) => {
    event.preventDefault();
    setSelectIdCustomer(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button onClick={() => console.info('Clic Button on papel')}>
              {`FACTURAR: $ ${checkoutTotalCart}`}
            </Button>
          </Paper>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel htmlFor='selectCustomerForBill'>Identificación del Cliente</InputLabel>
            <Select
              native
              value={selectIdCustomer}
              onChange={handleChangeSelectIdCustomer}
              inputProps={{
                name: 'selectCustomerForBill',
              }}
            >
              <option value='' />
              {customersList.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.id}
                </option>
              ))}
            </Select>
          </FormControl>
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
  };
};

const mapDispathToProps = {
  removeFromCart,
  calcCheckoutTotalCart,
};

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCart);
