const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        listaCarrito: [...state.listaCarrito, action.payload],
        checkOutTotal: state.checkOutTotal + action.payload.price,
      };
    case 'REMOVE_FROM_CART': {
      const elementRemoved = state.listaCarrito.splice(action.payload, 1)[0];
      return {
        ...state,
        listaCarrito: [...state.listaCarrito],
        checkOutTotal: state.checkOutTotal - elementRemoved.price,
      };
    }
    default:
      return state;
  }
};

export default reducer;
