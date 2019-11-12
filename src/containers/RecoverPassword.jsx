import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { Person as PersonIcon } from '@material-ui/icons';
import useStyles from '../assets/styles/style--LogInUpRpw';

const RecoverPassword = () => {
  const label = 'Correo electrónico',
    variant = 'outlined';

  const classes = useStyles({
    heightSection: '32em',
    widthSection: '100vw',
    heightContainer: '90%',
    widthContainer: '90vw',
    heightForm: '40%',
    widthForm: '100%',
    heightSectionBottom: 'initial',
    widthSectionBottom: '86%',
  });

  const [values, setValues] = useState({
    email: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Recuperar clave</h1>
        <form action='' method='get' className={classes.form}>
          <TextField
            type='email'
            name='email'
            autoComplete='email'
            margin='normal'
            required={true}
            label={label}
            variant={variant}
            onChange={handleChange}
            InputProps={{
              classes: {
                input: classes.textSize,
                root: classes.noPaddingRight,
              },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton color='primary'>
                    <PersonIcon fontSize='large' />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type='submit'
            color='primary'
            variant='contained'
            classes={{ label: classes.textSize }}
          >
            RESTABLECER
          </Button>
        </form>

        <section className={classes.sectionBottom}>
          <div>
            <Link to='/login'>
              <h2>Volver a inicio de sesión</h2>
            </Link>
          </div>
          <p>Si no tienes una cuenta</p>
          <Link to='/logUp'>
            <h3>CREAR CUENTA</h3>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default RecoverPassword;
