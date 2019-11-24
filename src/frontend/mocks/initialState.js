const initialState = {
  isAuthenticated: false,
  orderNumberToPrint: 0,
  shoppingCartList: [],
  checkoutTotalCart: 0.0,
  checkoutTotalBuy: 0.0,
  productsByCategory: '',
  categories: [
    {
      id: 'pizza',
      title: 'PIZZA',
      logo: 'https://live.staticflickr.com/3618/3495871394_b779997772_t.jpg',
    },
    {
      id: 'dessert',
      title: 'DESSERTS',
      logo: 'https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_960_720.jpg',
    },
    {
      id: 'burger',
      title: 'BURGERS',
      logo: 'https://live.staticflickr.com/8631/16505521041_b7d25f7dc8_t.jpg',
    },
    {
      id: 'bowl',
      title: 'BOWLS',
      logo: 'https://live.staticflickr.com/7187/6968734877_ea96b6f678_t.jpg',
    },
    {
      id: 'sushi',
      title: 'SUSHI',
      logo: 'https://live.staticflickr.com/5552/15282573441_2f6e4ef876_t.jpg',
    },
    {
      id: 'drink',
      title: 'DRINKS',
      logo: 'https://cdn.pixabay.com/photo/2018/04/08/13/17/glass-3301200_960_720.jpg',
    },
  ],
  products: [
    {
      sku: '1',
      name: 'El pollo volador',
      categories: ['pizza', 'bbq', 'chicken'],
      inStock: 2,
      buyingPrice: 8000.0,
      sellingPrice: 15400.0,
      description: 'BBQ Chicken Pizza',
      image: 'https://live.staticflickr.com/46/132554707_97e9e0f1c4_w.jpg',
    },
    {
      sku: '2',
      name: 'Hongos para volar',
      categories: ['pizza', 'Mushroom'],
      inStock: 2,
      buyingPrice: 10000.0,
      sellingPrice: 18600.0,
      description: 'Mushroom pizza',
      image: 'https://live.staticflickr.com/8242/8487666183_75e2e25206_t.jpg',
    },
    {
      sku: '3',
      name: 'Salchichón brutal',
      categories: ['pizza'],
      inStock: 3,
      buyingPrice: 1750.0,
      sellingPrice: 3000.0,
      description: 'Salami pizza',
      image: 'https://live.staticflickr.com/8215/8314519232_af6b7bed29_t.jpg',
    },
    {
      sku: '4',
      name: 'Barquito de Chocolate',
      categories: ['dessert'],
      inStock: 2,
      buyingPrice: 3460.0,
      sellingPrice: 4990.0,
      description: 'Chocolate con nueces',
      image: 'https://live.staticflickr.com/1646/26680445546_9086b7cd27_t.jpg',
    },
    {
      sku: '5',
      name: "Don't worry its low fat",
      categories: ['burger'],
      inStock: 5,
      buyingPrice: 3540.0,
      sellingPrice: 7680.0,
      description: 'West-ward Pharmaceutical Corp',
      image: 'https://live.staticflickr.com/2083/1616104514_8c12518912_t.jpg',
    },
    {
      sku: '6',
      name: 'Tradicional Sushi',
      categories: ['sushi'],
      inStock: 1,
      buyingPrice: 8560.0,
      sellingPrice: 11990.0,
      description: 'Dos variantes básicas de sushi',
      image: 'https://live.staticflickr.com/729/32762213142_fb28993753_t.jpg',
    },
    {
      sku: '7',
      name: 'Coffee Hearts',
      categories: ['drink'],
      inStock: 20,
      buyingPrice: 1230.0,
      sellingPrice: 2800.0,
      description: 'Capuchino de corazones',
      image: 'https://live.staticflickr.com/6183/6083139179_728921bccc.jpg',
    },
    {
      sku: '8',
      name: 'Artabria postre',
      categories: ['dessert'],
      inStock: 3,
      buyingPrice: 2200.0,
      sellingPrice: 3989.0,
      description: 'milhoja de mascarpone con fresas y salsa de frambuesa',
      image: 'https://live.staticflickr.com/3065/3064798535_1aab23750c_t.jpg',
    },
    {
      sku: '9',
      name: 'Fanta Naranja - lata',
      categories: ['drink'],
      inStock: 20,
      buyingPrice: 2000.0,
      sellingPrice: 2500.0,
      description: 'Fanta Naranja en lata 250ml',
      image: 'https://live.staticflickr.com/8509/8563942072_01b5850567_t.jpg',
    },
    {
      sku: '10',
      name: 'Camaron en la nube voladora',
      categories: ['sushi'],
      inStock: 1,
      buyingPrice: 10000.0,
      sellingPrice: 17990.0,
      description: 'Camaron sobre arroz y cinta dulce',
      image: 'https://live.staticflickr.com/5464/8960691111_6bae8ae117_t.jpg',
    },
    {
      sku: '11',
      name: 'Mini spicy burger',
      categories: ['burger'],
      inStock: 16,
      buyingPrice: 3530.0,
      sellingPrice: 6000.0,
      description: 'Pequeñas hamburguesas picantes x2',
      image: 'https://live.staticflickr.com/8863/18127010258_36f7c87c63_t.jpg',
    },
    {
      sku: '12',
      name: 'Hongos para volar doble',
      categories: ['pizza', 'Mushroom'],
      inStock: 1,
      buyingPrice: 16700.0,
      sellingPrice: 29980.0,
      description: 'Mushroom pizza doble diámetro',
      image: 'https://live.staticflickr.com/8242/8487666183_75e2e25206_t.jpg',
    },
  ],
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
      date: '2019-11-20T3-53-36.496',
      customer: { idType: 'CC', id: '59480261', name: 'Paulo', surname: 'Veinteañero' },
      checkoutTotal: 30800.0,
      soldProducts: [
        {
          sku: '1',
          name: 'El pollo volador',
          sellingPrice: 15400.0,
          amount: 2,
          checkoutPartial: 30800.0,
        },
      ],
    },
  ],
};

export default initialState;
