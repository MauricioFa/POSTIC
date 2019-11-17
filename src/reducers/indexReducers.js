import auxAddToCart from './auxReducers';

const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCartList: auxAddToCart(state.shoppingCartList, action.payload),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        shoppingCartList: state.shoppingCartList.filter((item) => item.sku !== action.payload),
      };

    case 'CALC_CHECKOUT_TOTAL_CART':
      return {
        ...state,
        checkoutTotalCart:
          state.shoppingCartList.length > 0.0
            ? state.shoppingCartList.map((item) => item.checkoutPartial).reduce((a, v) => a + v, 0.0)
            : 0.0,
      };

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
