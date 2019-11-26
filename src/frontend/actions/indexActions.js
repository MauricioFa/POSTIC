const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

const updateProductsList = (payload) => ({
  type: 'UPDATE_PRODUCTS_LIST',
  payload,
});

const setuserName = (payload) => ({
  type: 'USER_NAME',
  payload,
});

const calcCheckoutTotalCart = (payload) => ({
  type: 'CALC_CHECKOUT_TOTAL_CART',
  payload,
});

const addToInventory = (payload) => ({
  type: 'ADD_TO_INVENTORY',
  payload,
});

const removeFromInventory = (payload) => ({
  type: 'REMOVE_FROM_INVENTORY',
  payload,
});

const updateToInventory = (payload) => ({
  type: 'UPDATE_TO_INVENTORY',
  payload,
});

const addToCustomersList = (payload) => ({
  type: 'ADD_TO_CUSTOMERS_LIST',
  payload,
});

const removeFromCustomersList = (payload) => ({
  type: 'REMOVE_FROM_CUSTOMERS_LIST',
  payload,
});

const updateToCustomersList = (payload) => ({
  type: 'UPDATE_TO_CUSTOMERS_LIST',
  payload,
});

const addToOrdersList = (payload) => ({
  type: 'ADD_TO_ORDERS_LIST',
  payload,
});

const cleanCartBillDo = (payload) => ({
  type: 'CLEAN_CART_BILL_DO',
  payload,
});

const orderNumToPrintByBill = (payload) => ({
  type: 'ORDER_NUM_TO_PRINT_BY_BILL',
  payload,
});

const orderNumToPrintByOrders = (payload) => ({
  type: 'ORDER_NUM_TO_PRINT_BY_ORDERS',
  payload,
});

const authenticatedToTrue = (payload) => ({
  type: 'AUTHENTICATED_TO_TRUE',
  payload,
});

export {
  addToCart,
  removeFromCart,
  calcCheckoutTotalCart,
  addToInventory,
  removeFromInventory,
  updateToInventory,
  addToCustomersList,
  removeFromCustomersList,
  updateToCustomersList,
  cleanCartBillDo,
  addToOrdersList,
  orderNumToPrintByBill,
  orderNumToPrintByOrders,
  authenticatedToTrue,
  setuserName,
  updateProductsList,
};
