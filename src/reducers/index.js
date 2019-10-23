const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        checkOutTotal: state.checkOutTotal + action.payload.price,
      }
    case 'REMOVE_FROM_CART':
      const elementRemoved = state.cart.splice(action.payload, 1)[0]
      return {
        ...state,
        cart: [...state.cart],
        checkOutTotal: state.checkOutTotal - elementRemoved.price,
      }
    default:
      return state;
  }
}

export default reducer;