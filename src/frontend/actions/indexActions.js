import axios from 'axios';

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

const setUserName = (payload) => ({
  type: 'SET_USER_NAME',
  payload,
});

const registerProduct = (payload) => {
  return (dispatch) => {
    axios
      .post('https://postic.now.sh/api/products', payload)
      .then(() => dispatch(addToInventory(payload)))
      .catch((err) => console.log(`ESTO ES UN ERROR ${err}`));
  };
};

const deleteProduct = (payload) => {
  return (dispatch) => {
    axios
      .delete(`https://postic.now.sh/api/products/${payload}`)
      .then(() => dispatch(removeFromInventory(payload)))
      .catch((err) => console.log(`ESTO ES UN ERROR ${err}`));
  };
};

const editProduct = (payload) => {
  return (dispatch) => {
    const newData = {
      sku: payload.updateData.sku,
      name: payload.updateData.name,
      description: payload.updateData.description,
      categories: payload.updateData.categories,
      buyingPrice: payload.updateData.buyingPrice,
      sellingPrice: payload.updateData.sellingPrice,
      inStock: payload.updateData.inStock,
      limitInStock: payload.updateData.limitInStock,
    };
    axios
      .put(`https://postic.now.sh/api/products/${payload.oldData._id}`, newData)
      .then(() => dispatch(updateToInventory(payload)))
      .catch(() => console.log(newData));
  };
};

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
  setUserName,
  registerProduct,
  deleteProduct,
  editProduct,
};
