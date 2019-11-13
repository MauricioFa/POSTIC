import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import AddNewButton from '../components/AddNewButton';
import CustomersList from '../components/CustomersList';
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

const Customers = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CustomersList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <CopyrightLabel
          title='Derechos Reservados'
          name='POSTIC'
          date='2019'
          linkTo='/#'
        />
        <AddNewButton />
      </main>
    </>
  );
};

export default Customers;
