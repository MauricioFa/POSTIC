import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Person as PersonIcon } from '@material-ui/icons';
import useStyles from '../assets/styles/style--LogInUpRpw';
import * as firebase from 'firebase';


const RecoverPassword = () => {
  const label = 'Correo electrónico',
    variant = 'outlined';

  const classes = useStyles({
    heightSection: '38em',
    widthSection: '100vw',
    heightContainer: '86%',
    widthContainer: '90vw',
    heightForm: '48%',
    widthForm: '100%',
    heightSectionBottom: 'initial',
    widthSectionBottom: '86%',
  });

  const [email, setEmail] = useState('');
  const [error, setErrors] = useState('');

  const history = useHistory();

  const handleRecoverPassword = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Se ha enviado un correo para restablecer la contraseña');
        history.push('/');
      })
      .catch((event) => {
        switch (event.code) {
          case 'auth/invalid-email':
            setErrors('Dirección de correo inválida');
            break;
          case 'auth/user-not-found':
            setErrors('Dirección de correo no encontrada');
            break;
          default:
            setErrors(event.message);
            break;
        }
      });
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Recuperar clave</h1>
        <form className={classes.form} onSubmit={(event) => handleRecoverPassword(event)}>
          <TextField
            type='email'
            name='email'
            autoComplete='name@email.com'
            margin='normal'
            required={true}
            label={label}
            variant={variant}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

          <Button type='submit' color='primary' variant='contained' classes={{ label: classes.textSize }}>
            RESTABLECER
          </Button>
          <span>{error}</span>
        </form>

        <section className={classes.sectionBottom}>
          <div>
            <Link to='/'>
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
