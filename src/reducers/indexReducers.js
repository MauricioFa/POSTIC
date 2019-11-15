const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCartList: [...state.shoppingCartList, action.payload],
        checkOutTotal: state.checkOutTotal + action.payload.unitValue,
      };
    case 'REMOVE_FROM_CART': {
      const elementRemoved = state.shoppingCartList.splice(action.payload, 1);
      return {
        ...state,
        shoppingCartList: [...state.shoppingCartList],
        checkOutTotal: state.checkOutTotal - elementRemoved[0].unitValue,
      };
    }
    case 'AUTHENTICATED_TO_TRUE':
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
