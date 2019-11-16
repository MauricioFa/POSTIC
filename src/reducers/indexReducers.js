const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCartList: [...state.shoppingCartList, action.payload],
        checkoutTotal:
          Math.floor(
            (state.shoppingCartList.map((item) => item.sellingPrice).reduce((add, value) => add + value, 0) +
              action.payload.sellingPrice) *
              100
          ) / 100,
      };
    case 'REMOVE_FROM_CART': {
      state.shoppingCartList.splice(action.payload, 1);
      return {
        ...state,
        shoppingCartList: [...state.shoppingCartList],
        checkoutTotal:
          Math.floor(
            state.shoppingCartList.map((item) => item.sellingPrice).reduce((add, value) => add + value, 0) *
              100
          ) / 100,
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
