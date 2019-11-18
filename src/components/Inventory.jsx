import React from 'react';
import { connect } from 'react-redux';
import { addToCart, updateProductsList } from '../actions/indexActions';
import useProduct from '../hooks/useProduct';
import '../assets/styles/Inventory.css';

const API_URL = 'https://postic.now.sh/api/products';

const Inventory = (props) => {
  const { productsList, addToCart } = props;

  const handleAddToCart = (productToAdd) => {
    addToCart(productToAdd);
  };

  const productsDB = useProduct(API_URL, productsList);
  props.updateProductsList(productsDB);

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
  updateProductsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
