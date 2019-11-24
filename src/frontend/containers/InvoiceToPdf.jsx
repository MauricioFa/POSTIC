/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import ReactToPrint from 'react-to-print';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import AddNewButton from '../components/AddNewButton';
import CopyrightLabel from '../components/CopyrightLabel';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  contentMain: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    '& ul li': {
      listStyle: 'none',
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const MyInvoice = React.forwardRef((props, ref) => {
  const { selectedOrder } = props;
  const classes = useStyles();
  return (
    <main ref={ref} className={classes.contentMain}>
      <Container maxWidth='sm' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {selectedOrder && (
                <>
                  <h2>Número de Orden: {selectedOrder.orderNumber}</h2>
                  <p>
                    <strong>Fecha y Hora: </strong>
                    {selectedOrder.date}
                  </p>
                  <h3>Información del comprador</h3>
                  <ul>
                    <li>
                      Identificación: {selectedOrder.customer.idType} {selectedOrder.customer.id}
                    </li>
                    <li>
                      Nombres: {selectedOrder.customer.surname} {selectedOrder.customer.name}
                    </li>
                  </ul>
                  <br />
                  <h2>Se factura los siguientes productos:</h2>
                  <p>
                    <strong>Producto </strong>/ <strong>(Cantidad) </strong>/ <strong>Valor unidad </strong>/{' '}
                    <strong>Valor</strong>
                  </p>
                  <br />
                  <ul>
                    {selectedOrder.soldProducts.map((item) => (
                      <li key={item.sku}>
                        {`${item.name} (x${item.amount}) .... ${item.sellingPrice} .. ${item.checkoutPartial}`}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <h3>Valor total a pagar ..... {selectedOrder.checkoutTotal}</h3>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
});

const InvoiceToPdf = (props) => {
  const { ordersList, orderNumberToPrint } = props;
  const classes = useStyles();

  const [selectedOrder, setSelectedOrder] = React.useState({
    orderNumber: 0,
    date: '',
    customer: { idType: '', id: '', name: '', surname: '' },
    checkoutTotal: 0.0,
    soldProducts: [{ sku: '', name: '', sellingPrice: 0.0, amount: 0, checkoutPartial: 0.0 }],
  });

  const [componentRef, setComponentRef] = React.useState({});

  React.useEffect(() => {
    const item = ordersList.filter((item) => item.orderNumber === orderNumberToPrint)[0];
    setSelectedOrder(item);
  }, []);

  return (
    <section className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ReactToPrint
                trigger={() => <input type='button' value='I M P R I M I R' />}
                content={() => componentRef}
              />
              <MyInvoice ref={(el) => setComponentRef(el)} selectedOrder={selectedOrder} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <CopyrightLabel title='Derechos Reservados' name='POSTIC' date='2019' linkTo='/#' />
      <AddNewButton />
    </section>
  );
};

const mapStateToProps = (state) => ({
  ordersList: state.ordersList,
  orderNumberToPrint: state.orderNumberToPrint,
});

export default connect(mapStateToProps, null)(InvoiceToPdf);
