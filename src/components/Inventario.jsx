import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Inventario.css';
import { addToCart } from '../actions/index-actions';

const Inventario = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
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
    products: state.listaProductos.data,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventario);
