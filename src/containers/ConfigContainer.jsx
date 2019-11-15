import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddNewButton from '../components/AddNewButton';
import ConfigCard from '../components/ConfigCard';
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
}));

const ConfigContainer = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <ConfigCard />
        </Container>
        <Container maxWidth='lg' className={classes.container}>
          <ConfigCard />
        </Container>
        <CopyrightLabel title='Derechos Reservados' name='POSTIC' date='2019' linkTo='/#' />
        <AddNewButton />
      </main>
    </>
  );
};

export default ConfigContainer;
