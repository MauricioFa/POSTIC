import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import AddNewButton from '../components/AddNewButton';
import CopyrightLabel from '../components/CopyrightLabel';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
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

const KEY_ORDER_NUMBER = 'selectedOrderNumber';

const InvoiceToPdf = (props) => {
  const { ordersList } = props;
  const classes = useStyles();
  const orderNumberMade = Number(sessionStorage.getItem(KEY_ORDER_NUMBER));
  const [selectedOrder, setSelectedOrder] = React.useState({
    orderNumber: 0,
    date: '',
    customer: { idType: '', id: '', name: '', surname: '' },
    checkoutTotal: 0.0,
    soldProducts: [{ sku: '', name: '', sellingPrice: 0.0, amount: 0, checkoutPartial: 0.0 }],
  });

  React.useEffect(() => {
    sessionStorage.removeItem(KEY_ORDER_NUMBER);
    setSelectedOrder(ordersList.filter((item) => item.orderNumber === orderNumberMade)[0]);
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1>Número de Orden: {selectedOrder.orderNumber}</h1>
              <p>
                <strong>Fecha y Hora</strong>
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <CopyrightLabel title='Derechos Reservados' name='POSTIC' date='2019' linkTo='/#' />
      <AddNewButton />
    </main>
  );
};

const mapStateToProps = (state) => ({
  ordersList: state.ordersList,
});

export default connect(mapStateToProps, null)(InvoiceToPdf);
