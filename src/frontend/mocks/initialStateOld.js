const initialState = {
  isAuthenticated: false,
  shoppingCartList: [],
  checkOutTotal: 0,
  productsList: {
    columns: [
      { title: 'Producto', field: 'name' },
      { title: 'SKU', field: 'sku' },
      { title: 'Presentación', field: 'description' },
      { title: 'Categoría', field: 'categoria' },
      { title: 'Valor unitario', field: 'unitValue', type: 'currency' },
    ],
    data: [
      {
        name: 'Ariel con Downy asdasdasdas',
        sku: '89ER5',
        description: 'Bolsa x 850g',
        categoria: 'Detergentes',
        unitValue: 7800,
        inventario: 200,
        image:
          'https://sodimac.scene7.com/is/image/SodimacPeru/3488373_01?$producto495$&id=nc2T12&fmt=jpg&fit=constrain,1&wid=380&hei=380',
      },
      {
        name: 'Chocolate SOL Vainilla',
        sku: 'E2580',
        description: 'Pack por 12 unidades',
        categoria: 'Chocolates',
        unitValue: 6800,
        inventario: 400,
        image:
          'https://metrocolombiafood.vteximg.com.br/arquivos/ids/159826-1000-1000/7702088092054-1.jpg?v=636670251328500000',
      },
      {
        name: 'Chocolate SOL Tradicional',
        sku: '897KL44',
        description: 'Pack por 12 unidades',
        categoria: 'Chocolates',
        unitValue: 5900,
        inventario: 400,
        image:
          'https://metrocolombiafood.vteximg.com.br/arquivos/ids/159826-1000-1000/7702088092054-1.jpg?v=636670251328500000',
      },
      {
        name: 'Aceite Oleocali',
        sku: 'E2589',
        description: 'Botella por 3 litros',
        categoria: 'Aceites',
        unitValue: 15800,
        inventario: 100,
        image: 'https://www.eurosupermercados.com/wp-content/uploads/2017/02/7701018064772.png',
      },
    ],
  },
  demoChart: [
    { time: '00:00', amount: 0 },
    { time: '03:00', amount: 1200 },
    { time: '06:00', amount: 600 },
    { time: '09:00', amount: 800 },
    { time: '12:00', amount: 1500 },
    { time: '15:00', amount: 2000 },
    { time: '18:00', amount: 2400 },
    { time: '21:00', amount: 2400 },
    { time: '24:00', amount: undefined },
  ],
  customersList: {
    columns: [
      { title: 'Nombres', field: 'name' },
      { title: 'Apellidos', field: 'surname' },
      { title: 'Teléfono', field: 'telefono' },
      { title: 'Email', field: 'email' },
      {
        title: 'Autoriza promociones por email',
        field: 'autorizaEmail',
        lookup: { 1: 'Sí', 2: 'No' },
      },
    ],
    data: [
      {
        name: 'Freddy',
        surname: 'Vega',
        telefono: 3135263232,
        email: 'freddier@platzi.com',
        autorizaEmail: 1,
      },
      {
        name: 'Elvis',
        surname: 'Ko',
        telefono: 3175235663,
        email: 'elviskohermoso@hotmail.com',
        autorizaEmail: 1,
      },
      {
        name: 'Paulo',
        surname: 'Veinteañero',
        telefono: 3245263636,
        email: 'paulo@gmail.com',
        autorizaEmail: 2,
      },
      {
        name: 'Que',
        surname: 'Tomás',
        telefono: 3015268585,
        email: 'Ktomas@yahoo.com',
        autorizaEmail: 1,
      },
    ],
  },
  orderList: {
    columns: [
      { id: 'order', label: '#Orden', minWidth: 170 },
      { id: 'date', label: 'Fecha', minWidth: 170, type: 'date' },
      { id: 'cliente', label: 'Cliente', minWidth: 170 },
      { id: 'valor', label: 'Valor', minWidth: 170, type: 'currency' },
    ],
    rows: [
      { order: 0, date: '16 Oct, 2019', cliente: 'Elvis Ko', valor: 64000 },
      {
        order: 1,
        date: '16 Oct, 2019',
        cliente: 'Paulo Veinteañero',
        valor: 32500,
      },
      { order: 2, date: '16 Oct, 2019', cliente: 'Que Tomás', valor: 100800 },
      {
        order: 3,
        date: '16 Oct, 2019',
        cliente: 'Maicol Fernando',
        valor: 37000,
      },
      { order: 4, date: '15 Oct, 2019', cliente: 'Freddy Vega', valor: 21000 },
      { order: 5, date: '15 Oct, 2019', cliente: 'Elvis Ko', valor: 8800 },
      {
        order: 6,
        date: '15 Oct, 2019',
        cliente: 'Paulo Veinteañero',
        valor: 196500,
      },
      { order: 7, date: '12 Oct, 2019', cliente: 'Que Tomás', valor: 58000 },
      {
        order: 8,
        date: '11 Oct, 2019',
        cliente: 'Maicol Fernando',
        valor: 29000,
      },
      { order: 9, date: '10 Oct, 2019', cliente: 'Freddy Vega', valor: 500 },
    ],
  },
};

export default initialState;
