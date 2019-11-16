import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, IconButton, InputAdornment, TextField, Card, CardMedia } from '@material-ui/core';
import {
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import { authenticatedToTrue } from '../actions/indexActions';
import useMyStyles from '../assets/styles/style--LogInUpRpw';
import imageAuxMediaQuery from '../assets/statics/office-1081807_640.jpg';

const Login = (props) => {
  const label = 'Correo electrónico',
    variant = 'outlined',
    textPlaceholder = 'Clave',
    helperText = 'Mínimo 8 caracteres';

  const classes = useMyStyles({
    heightSection: '40em',
    widthSection: '100vw',
    heightContainer: '90%',
    widthContainer: '90vw',
    heightForm: '62%',
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

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.authenticatedToTrue(true);
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Ingresa a la cuenta</h1>
        <form method='get' className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            type='email'
            name='email'
            autoComplete='name@email.com'
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
            autoComplete='current-password'
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

          <Button type='submit' color='primary' variant='contained' classes={{ label: classes.textSize }}>
            INGRESAR
          </Button>
        </form>

        <section className={classes.sectionBottom}>
          <div>
            <Link to='/newpassword'>
              <h3>¿Recuperar contraseña?</h3>
            </Link>
          </div>
          <p>Si no tienes una cuenta</p>
          <Link to='/logUp'>
            <h2>CREAR CUENTA</h2>
          </Link>
        </section>
      </div>

      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          component='img'
          alt='imageAuxLogin'
          image={imageAuxMediaQuery}
          title='imageAuxLogin'
        />
      </Card>
    </main>
  );
};

const mapDispatchToProps = {
  authenticatedToTrue,
};

export default connect(null, mapDispatchToProps)(Login);
