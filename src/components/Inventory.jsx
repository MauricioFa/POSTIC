import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index-actions';
import '../assets/styles/Inventory.css';

const Inventory = (props) => {
  const { products } = props;

  const handleAddToCart = (productToAdd) => {
    props.addToCart(productToAdd);
  };

  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map((product) => (
          <div className='Products-item' key={product.sku}>
            <img src={product.image} alt={product.name} />
            <div className='Products-item-info'>
              <h2>
                {product.name}
                <span>{product.unitValue}</span>
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
    products: state.productsList.data,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
