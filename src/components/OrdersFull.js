import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

const columns = [
  { id: "order", label: "#Orden", minWidth: 170 },
  { id: "date", label: "Fecha", minWidth: 170, type: "date" },
  { id: "cliente", label: "Cliente", minWidth: 170 },
  { id: "valor", label: "Valor", minWidth: 170, type: "currency" }
];

function createData(order, date, cliente, valor) {
  return { order, date, cliente, valor };
}

const rows = [
  createData(0, "16 Oct, 2019", "Elvis Ko", 64000),
  createData(1, "16 Oct, 2019", "Paulo Veinteañero", 32500),
  createData(2, "16 Oct, 2019", "Que Tomás", 100800),
  createData(3, "16 Oct, 2019", "Maicol Fernando", 37000),
  createData(4, "15 Oct, 2019", "Freddy Vega", 21000),
  createData(5, "15 Oct, 2019", "Elvis Ko", 8800),
  createData(6, "15 Oct, 2019", "Paulo Veinteañero", 196500),
  createData(7, "12 Oct, 2019", "Que Tomás", 58000),
  createData(8, "11 Oct, 2019", "Maicol Fernando", 29000),
  createData(9, "10 Oct, 2019", "Freddy Vega", 500)
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 640,
    overflow: "auto"
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Title>Relación de Pedidos</Title>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          labelRowsPerPage="Filas por página" /*Este es el atributo que permite modificar el texto -Rows per page-*/
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
