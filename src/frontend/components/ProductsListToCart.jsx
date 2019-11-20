import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/indexActions';
import '../assets/styles/ProductsListToCart.css';

const ProductsListToCart = (props) => {
  const { productsList, addToCart } = props;

  const handleAddToCart = (productToAdd) => {
    addToCart(productToAdd);
  };

  return (
    <div className='Products'>
      <div className='Products-items'>
        {productsList.map((product) => (
          <div className='Products-item' key={product.sku}>
            <img src={product.image} alt={product.name} />
            <div className='Products-item-info'>
              <h2>
                {product.name}
                <span>{product.sellingPrice}</span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type='button' onClick={() => handleAddToCart(product)}>
              Comprar
            </button>
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
