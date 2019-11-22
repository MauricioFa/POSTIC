import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
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
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const ShoppingCart = (props) => {
  const classes = useStyles();
  const { cart, checkoutTotalCart, removeFromCart, calcCheckoutTotalCart } = props;

  React.useEffect(() => {
    calcCheckoutTotalCart();
  }, [cart]);

  const handleCartItems = (elementId) => {
    removeFromCart(elementId);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{`FACTURAR: $ ${checkoutTotalCart}`}</Paper>
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
  };
};

const mapDispathToProps = {
  removeFromCart,
  calcCheckoutTotalCart,
};

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCart);
