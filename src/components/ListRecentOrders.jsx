import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Title from './Title';
import Theme from '../assets/styles/Theme';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Orders = (props) => {
  const classes = useStyles();
  const { lastOrders } = props;

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Title>Pedidos Recientes</Title>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>#Orden</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell align='right'>Valor Factura</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lastOrders.map((order) => (
              <TableRow key={order.orderNumber}>
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{`${order.customer.name} ${order.customer.surname}`}</TableCell>
                <TableCell align='right'>$ {order.checkoutTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color='primary' to='/ordersfull'>
            Ver más pedidos
          </Link>
        </div>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  lastOrders: state.ordersList.slice(-5),
});

export default connect(mapStateToProps, null)(Orders);
