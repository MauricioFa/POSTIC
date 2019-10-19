/* eslint-disable no-script-url */

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "../styles/Theme";

// Generate Order Data
function createData(id, date, name, enviarA, paymentMethod, amount) {
  return { id, date, name, enviarA, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Oct, 2019",
    "Elvis Ko",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    64000
  ),
  createData(
    1,
    "16 Oct, 2019",
    "Paulo Veinteañero",
    "London, UK",
    "VISA ⠀•••• 2574",
    32500
  ),
  createData(
    2,
    "16 Oct, 2019",
    "Que Tomás",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100800
  ),
  createData(
    3,
    "16 Oct, 2019",
    "Maicol Fernando",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    37000
  ),
  createData(
    4,
    "15 Oct, 2019",
    "Freddy Vega",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    21000
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Title>Pedidos Recientes</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#Orden</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" to="/Pedidos">
            Ver más pedidos
          </Link>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
