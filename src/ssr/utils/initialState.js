const initialState = {
  isAuthenticated: false,
  modeAdmin: true,
  orderNumberToPrint: 0,
  shoppingCartList: [],
  checkoutTotalCart: 0.0,
  checkoutTotalBuy: 0.0,
  productsByCategory: '',
  products: [],
  customersList: [
    {
      idType: 'CC',
      id: '59480261',
      name: 'Paulo',
      surname: 'Veinteañero',
      phone: '3175235663',
      email: 'paulo2019@hotmail.com',
      authorizeEmail: 'yes',
    },
    {
      idType: 'CC',
      id: '1020259784',
      name: 'Laura',
      surname: 'Pereira',
      phone: '3115698412',
      email: '',
      authorizeEmail: '',
    },
  ],
  ordersList: [
    {
      orderNumber: 126,
      date: '2019-11-20T15-53-36.496',
      customer: { idType: 'CC', id: '59480261', name: 'Paulo', surname: 'Veinteañero' },
      checkoutTotal: 30800.0,
      soldProducts: [
        {
          sku: 'soda0001',
          name: 'Coca Cola Lover',
          sellingPrice: 2500.0,
          amount: 2,
          checkoutPartial: 5000.0,
        },
      ],
    },
    {
      orderNumber: 127,
      date: '2019-11-22T18-53-36.496',
      customer: { idType: 'CC', id: '1020259784', name: 'Laura', surname: 'Pereira' },
      checkoutTotal: 30800.0,
      soldProducts: [
        {
          sku: 'ff0001',
          name: 'Hongos para volar',
          sellingPrice: 3400.0,
          amount: 1,
          checkoutPartial: 3400.0,
        },
        {
          sku: 'ff0004',
          name: 'Tradicional Sushi',
          sellingPrice: 11990.0,
          amount: 1,
          checkoutPartial: 11990.0,
        },
      ],
    },
  ],
};

export default initialState;
