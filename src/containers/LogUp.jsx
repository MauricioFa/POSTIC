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
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from '../styles/style--LogInUpRpw';

const LogUp = () => {
  const label = 'Correo electrónico',
    variant = 'outlined',
    textPlaceholder = 'Clave',
    textPlaceholderPasswordAnew = 'Repetir Clave',
    helperText = 'Mínimo 8 caracteres';

  const classes = useStyles({
    heightSection: '41em',
    widthSection: '100vw',
    heightContainer: '94%',
    widthContainer: '90vw',
    heightForm: '62%',
    widthForm: '100%',
    heightSectionBottom: 'initial',
    widthSectionBottom: '86%',
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordAnew: '',
    showPassword: false,
    showPasswordAnew: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPasswordAnew = (event) => {
    event.preventDefault();
    setValues({ ...values, showPasswordAnew: !values.showPassword });
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

          <TextField
            required={true}
            error={false}
            variant={variant}
            type={values.showPasswordAnew ? 'text' : 'password'}
            label={textPlaceholderPasswordAnew}
            value={values.passwordAnew}
            helperText={helperText}
            onChange={handleChange('passwordAnew')}
            InputProps={{
              classes: { input: classes.textSize },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    aria-label='toggle password visibility'
                    color='primary'
                    onClick={handleClickShowPasswordAnew}
                  >
                    {values.showPasswordAnew ? (
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
            CREAR CUENTA
          </Button>
        </form>

        <section className={classes.sectionBottom}>
          <h2>O Regístrate con</h2>
          <div>
            <span>
              <Link to='/API-google'>
                <FontAwesomeIcon icon={faGoogle} size='3x' />
              </Link>
              <Link to='/API-facebook'>
                <FontAwesomeIcon icon={faFacebook} size='3x' />
              </Link>
              <Link to='/API-twitter'>
                <FontAwesomeIcon icon={faTwitter} size='3x' />
              </Link>
            </span>
          </div>
          <Link to='/login' className='linkToLogin-logUp'>
            <h3>Iniciar sesión</h3>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default LogUp;
