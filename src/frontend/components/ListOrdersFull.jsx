import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LocalPrintshopTwoToneIcon from '@material-ui/icons/LocalPrintshopTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import tableIcons from './utils/tableIconsByMaterialTable';
import { orderNumToPrintByOrders } from '../actions/indexActions';

const OrdersFull = (props) => {
  const { ordersList, orderNumberToPrint } = props;
  const history = useHistory();
  const columns = [
    { title: '# Orden', field: 'orderNumber' },
    { title: 'Fecha', field: 'date' },
    { title: 'ID Cliente', field: 'id' },
    { title: 'Nombre Cliente', field: 'fullName' },
    { title: 'Valor Factura', field: 'checkoutTotal', type: 'currency' },
  ];
  const ordersListForShowing = ordersList.map((order) => ({
    orderNumber: order.orderNumber,
    date: order.date,
    checkoutTotal: order.checkoutTotal,
    id: order.customer.id,
    fullName: `${order.customer.name} ${order.customer.surname}`,
  }));
  const tableIconsFix = {
    ...tableIcons,
    Delete: React.forwardRef((props, ref) => (
      <LocalPrintshopTwoToneIcon {...props} ref={ref} color='primary' />
    )),
  };

  React.useEffect(() => {
    props.orderNumToPrintByOrders(0);
  }, []);

  const onClickGenInvoice = () => {
    if (orderNumberToPrint) history.push('/invoicepdf');
  };

  return (
    <>
      {orderNumberToPrint !== 0 && (
        <Button
          variant='contained'
          color='primary'
          onClick={onClickGenInvoice}
          style={{ padding: '6px 0 2px' }}
        >
          <div>{`Orden # ${orderNumberToPrint} `}</div>
          <ArrowForwardIcon />
          <div>
            <LocalPrintshopTwoToneIcon fontSize='large' />
          </div>
        </Button>
      )}
      <MaterialTable
        title='Pedidos'
        columns={columns}
        data={ordersListForShowing}
        icons={tableIconsFix}
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
            emptyDataSourceMessage: 'No se encontró pedido relacionado',
            filterRow: {
              filterTooltip: 'Filtrar',
            },
            editRow: {
              deleteText: '¿Deseas imprimir este documento?',
              cancelTooltip: 'Cancelar',
              saveTooltip: 'Confirmar',
            },
          },
        }}
        editable={{
          onRowDelete: (printData) =>
            new Promise((resolve) => {
              resolve(props.orderNumToPrintByOrders(printData.orderNumber));
            }),
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ordersList: state.ordersList,
    orderNumberToPrint: state.orderNumberToPrint,
  };
};

const mapDispatchToProps = {
  orderNumToPrintByOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersFull);
