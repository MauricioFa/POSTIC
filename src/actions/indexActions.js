const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

const authenticatedToTrue = (payload) => ({
  type: 'AUTHENTICATED_TO_TRUE',
  payload,
});

const setuserName = (payload) => ({
  type: 'USER_NAME',
  payload,
});

export { addToCart, removeFromCart, authenticatedToTrue, setuserName };
