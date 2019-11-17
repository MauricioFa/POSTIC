import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Ventas totales</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        a 12 octubre, 2019
      </Typography>
      <div>
        <Link color='primary' to='/#'>
          Ver balance
        </Link>
      </div>
    </>
  );
};

export default Deposits;
