import React from 'react';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import tableIcons from './utils/tableIconsByMaterialTable';

// const KEY_ORDER_NUMBER = 'selectedOrderNumber';
let historyPush = false;

const OrdersFull = (props) => {
  const { ordersList } = props;
  // const history = useHistory();
  // const [historyPush, setHistoryPush] = React.useState(false);

  // const existSelectedOrder = () => {
  //   setHistoryPush(true);
  // };

  // React.useEffect(() => {
  //   if (historyPush) {
  //     history.push('/invoicepdf');
  //   }
  // }, []);

  const ordersListForShowing = ordersList.map((order) => ({
    orderNumber: order.orderNumber,
    date: order.date,
    checkoutTotal: order.checkoutTotal,
    id: order.customer.id,
    fullName: `${order.customer.name} ${order.customer.surname}`,
  }));

  const columns = [
    { title: '# Orden', field: 'orderNumber' },
    { title: 'Fecha', field: 'date' },
    { title: 'ID Cliente', field: 'id' },
    { title: 'Nombre Cliente', field: 'fullName' },
    { title: 'Valor Factura', field: 'checkoutTotal', type: 'currency' },
  ];

  return (
    <MaterialTable
      title='Pedidos'
      columns={columns}
      data={ordersListForShowing}
      icons={tableIcons}
      options={{
        pageSize: 10,
        pageSizeOptions: [10, 20, 40],
      }}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'filas',
          nextTooltip: 'Siguiente',
          previousTooltip: 'Anterior',
          firstTooltip: 'Primera Página',
          lastTooltip: 'Última página',
        },
        toolbar: {
          nRowsSelected: '{0} fila(s) seleccionada(s)',
          searchTooltip: 'Buscar',
          searchPlaceholder: 'Buscar',
        },
        header: {
          actions: 'Acciones',
        },
        body: {
          addTooltip: 'Añadir',
          deleteTooltip: 'Eliminar',
          editTooltip: 'Editar',
          emptyDataSourceMessage: 'No se encontró producto',
          filterRow: {
            filterTooltip: 'Filtrar',
          },
          editRow: {
            deleteText: '¿Estás seguro de eliminar este producto?',
            cancelTooltip: 'Cancelar',
            saveTooltip: 'Confirmar',
          },
        },
      }}
      editable={{
        onRowDelete: (printData) =>
          new Promise((resolve) => {
            // sessionStorage.setItem(KEY_ORDER_NUMBER, printData.orderNumber.toString());
            historyPush = true;
            console.log(historyPush);
            resolve();
          }),
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ordersList: state.ordersList,
  };
};

export default connect(mapStateToProps, null)(OrdersFull);
