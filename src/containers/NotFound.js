import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          404: Página no encontrada
        </Typography>
        <Typography component="p">
          El elemento al que se pretende acceder no existe.
        </Typography>
        <Link to="/">
          <Button color="primary" className={classes.button}>
            Volver a inicio
          </Button>
        </Link>
      </Paper>
    </div>
  );
}
