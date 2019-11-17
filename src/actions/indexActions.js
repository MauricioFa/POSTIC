const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

const calcCheckoutTotalCart = (payload) => ({
  type: 'CALC_CHECKOUT_TOTAL_CART',
  payload,
});

const authenticatedToTrue = (payload) => ({
  type: 'AUTHENTICATED_TO_TRUE',
  payload,
});

export { addToCart, removeFromCart, calcCheckoutTotalCart, authenticatedToTrue };
