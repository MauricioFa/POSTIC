import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Title from './Title';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 640,
    overflow: 'auto',
  },
});

const columns = [
  { idLabel: 'orderNumber', label: '#Orden', minWidth: 170 },
  { idLabel: 'date', label: 'Fecha', minWidth: 170, type: 'date' },
  { idLabel: 'customer', label: 'Cliente', minWidth: 170 },
  { idLabel: 'checkoutTotal', label: 'Valor Factura', minWidth: 170, type: 'currency' },
];

const OrdersFull = ({ ordersList }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [ordersPerPage, setOrdersPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setOrdersPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Title>Relación de Pedidos</Title>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.idLabel} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersList
                .slice(page * ordersPerPage, page * ordersPerPage + ordersPerPage)
                .map((order, index) => {
                  const indexkey = index + 1;
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={indexkey}>
                      {columns.map((column) => {
                        const value =
                          column.idLabel === 'customer' ? order[column.idLabel].name : order[column.idLabel];
                        return (
                          <TableCell key={column.idLabel} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component='div'
          labelRowsPerPage='Filas por página'
          count={ordersList.length}
          rowsPerPage={ordersPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ordersList: state.ordersList,
  };
};

export default connect(mapStateToProps, null)(OrdersFull);
