import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import useStyles from '../assets/styles/style--LogInUpRpw';

const NotFound = () => {
  const classes = {
    ...useStyles({
      heightSection: '60vh',
      widthSection: '100vw',
      heightContainer: '90%',
      widthContainer: '90vw',
      heightSectionBottom: 'initial',
      widthSectionBottom: '86%',
    }),
    h1: { color: 'red' },
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 style={classes.h1}>Error 404</h1>
        <div className={classes.sectionBottom}>
          <div>
            <Typography color='textSecondary' align='center'>
              El elemento al que se pretende acceder no existe
            </Typography>
          </div>
          <Link to='/'>
            <h2>Volver al inicio</h2>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
