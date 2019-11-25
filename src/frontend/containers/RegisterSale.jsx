import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import CopyrightLabel from '../components/CopyrightLabel';
import ProductsListToCart from '../components/ProductsListToCart';
import ShoppingCart from '../components/ShoppingCart';
import CustomersList from '../components/CustomersList';

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
    height: '20em',
  },
  fixedHeightProducts: {
    height: '20em',
  },
  [theme.breakpoints.up('768')]: {
    fixedHeightCart: {
      height: '26em',
    },
    fixedHeightProducts: {
      height: '30em',
    },
  },
  [theme.breakpoints.up('960')]: {
    fixedHeightCart: {
      height: '38em',
    },
    fixedHeightProducts: {
      height: '38em',
    },
  },
  [theme.breakpoints.up('1024')]: {
    fixedHeightCart: {
      height: '44em',
    },
    fixedHeightProducts: {
      height: '44em',
    },
  },
}));

const RegisterSale = () => {
  const classes = useStyles();
  const fixedHeightPaperCart = clsx(classes.paper, classes.fixedHeightCart);
  const fixedHeightPaperProducts = clsx(classes.paper, classes.fixedHeightProducts);
  const [easyCrudCustomer, setEasyCrudCustomer] = useState(false);

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Button variant='contained' onClick={() => setEasyCrudCustomer(!easyCrudCustomer)}>
            Nuevo cliente
          </Button>
          <Grid container spacing={3}>
            {easyCrudCustomer && (
              <Grid item xs={12}>
                <CustomersList optionsPages={{ pageSize: 1, pageSizeOptions: [1] }} />
              </Grid>
            )}
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
