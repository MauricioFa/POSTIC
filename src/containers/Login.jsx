import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import {
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import useStyles from '../styles/style--LogInUpRpw';

const Login = () => {
  const label = 'Correo electrónico',
    variant = 'outlined',
    textPlaceholder = 'Clave',
    helperText = 'Mínimo 8 caracteres';

  const classes = useStyles({
    heightSection: '36em',
    widthSection: '100vw',
    heightContainer: '90%',
    widthContainer: '90vw',
    heightForm: '54%',
    widthForm: '100%',
    heightSectionBottom: 'initial',
    widthSectionBottom: '86%',
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Ingresa a la cuenta</h1>
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

          <TextField
            required={true}
            error={false}
            variant={variant}
            type={values.showPassword ? 'text' : 'password'}
            label={textPlaceholder}
            value={values.password}
            helperText={helperText}
            onChange={handleChange('password')}
            InputProps={{
              classes: { input: classes.textSize },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    aria-label='toggle password visibility'
                    color='primary'
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? (
                      <VisibilityIcon fontSize='large' />
                    ) : (
                      <VisibilityOffIcon fontSize='large' />
                    )}
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
            INGRESAR
          </Button>
        </form>

        <section className={classes.sectionBottom}>
          <div>
            <Link to='/recoverPassword'>
              <h3>¿Recuperar contraseña?</h3>
            </Link>
          </div>
          <p>Si no tienes una cuenta</p>
          <Link to='/logUp'>
            <h2>CREAR CUENTA</h2>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Login;
