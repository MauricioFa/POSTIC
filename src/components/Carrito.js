import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import '../styles/Carrito.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    background: "#009688"
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}


const Carrito = (props) => {
  const classes = useStyles();
  const cart = props.cart;


  const handleCartItems = (elementIndex) => {
    props.removeFromCart(elementIndex)
  }
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" className={classes.title}>
          Artículos a facturar
        </Typography>
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map((item, index) => (
            <div key={index} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.name}</h4>
                <span>
                  $
                {item.unitValue}
                </span>
              </div>
              <DeleteIcon onClick = {() => handleCartItems(index)}/>
              {/* <i className="fas fa-trash-alt"  onClick={() => handleCartItems(index)}  /> */}
            </div>
          ))}
        </div>
        <Grid item xs={12}>
          <Paper className={classes.paper}>SUBTOTAL: $87,500</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.listaCarrito,
    /* checkOutTotal: state.checkOutTotal, */
  };
};

const mapDispathToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispathToProps)(Carrito);