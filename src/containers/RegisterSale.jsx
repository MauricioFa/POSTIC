import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import CopyrightLabel from '../components/CopyrightLabel';
import ProductsListToCart from '../components/ProductsListToCart';
import ShoppingCart from '../components/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeightCart: {
    height: '24em',
  },
  fixedHeightProducts: {
    height: '24em',
  },
}));

const RegisterSale = () => {
  const classes = useStyles();
  const fixedHeightPaperCart = clsx(classes.paper, classes.fixedHeightCart);
  const fixedHeightPaperProducts = clsx(classes.paper, classes.fixedHeightProducts);

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaperCart}>
                <ShoppingCart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaperProducts}>
                <ProductsListToCart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <CopyrightLabel title='Copyright' name='POSTIC' date='2019' linkTo='/#' />
      </main>
    </>
  );
};

export default RegisterSale;
