import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { addToCart } from '../actions/indexActions';

const useStyles = makeStyles((theme) => ({
  productsItems: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
    [theme.breakpoints.down('719')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('419')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  productItem: {
    textDecoration: 'none',
    boxShadow: '8px 14px 38px rgba(39, 44, 49, .3), 1px 3px 8px rgba(39, 44, 49, .1)',
    borderRadius: '10px',
    margin: '0 0 20px 0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productItemImg: {
    width: '150px',
    height: '150px',
    '& img': {
      height: '100%',
      width: '100%',
      padding: '4px',
      borderRadius: '10%',
      objectfit: 'contain',
    },
  },
  productItemInfo: {
    padding: '8px 12px',
    height: '140px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '0',
    '& div': {
      width: '100%',
      '& h2': {
        fontSize: '1.2em',
        fontWeight: 'bold',
        margin: '4px',
      },
      '& p': {
        margin: '4px',
      },
    },
    '& h3': {
      color: '#d71f1fde',
      fontSize: '1.4em',
      textAlign: 'right',
      margin: '0',
    },
  },
  button: {
    textTransform: 'capitalize',
    fontSize: '1.2em',
    fontWeight: 'lighter',
    fontFamily: 'sans',
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const ProductsListToCart = (props) => {
  const classes = useStyles();
  const { productsList, addToCart } = props;

  const handleAddToCart = (productToAdd) => {
    if (productToAdd.inStock > 0) {
      const newProductsList = productsList.map((item) =>
        productToAdd.sku === item.sku ? { ...item, inStock: item.inStock - 1 } : item
      );
      addToCart({ productToAdd, newProductsList });
    }
  };

  return (
    <div className={classes.products}>
      <div className={classes.productsItems}>
        {productsList.map((product) => (
          <div className={classes.productItem} key={product.sku}>
            <div className={classes.productItemImg}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={classes.productItemInfo}>
              <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <h3>$ {product.sellingPrice}</h3>
            </div>
            <Button
              fullWidth={true}
              color={product.inStock ? 'primary' : 'secondary'}
              variant={product.inStock ? 'contained' : 'outlined'}
              className={classes.button}
              onClick={() => handleAddToCart(product)}
            >
              <span>{product.inStock ? 'Agregar' : 'Agotado'}</span> <span>[{product.inStock}]</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsList: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListToCart);
