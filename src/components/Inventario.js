import React from "react";
import { connect } from 'react-redux';
import '../styles/Inventario.css';


const Inventario = (props) => {
  const { products } = props;

/*   const handleAddToCart = (product) => {
    props.addToCart(product);
  }
 */
 
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
                  $
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" /* onClick={() => handleAddToCart(product)} */>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

/* const mapDispatchToProps = {
  addToCart,
};
 */
export default connect(mapStateToProps, null)(Inventario);
