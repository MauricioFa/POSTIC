import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from '../assets/styles/style--LogInUpRpw';
import { authenticatedToTrue, setuserName } from '../actions/indexActions';
import * as firebase from 'firebase';

const LogUp = (props) => {
  const label = 'Correo electrónico',
    variant = 'outlined',
    textPlaceholder = 'Clave',
    // textPlaceholderPasswordAnew = 'Repetir Clave',
    helperText = 'Mínimo 6 caracteres';


  const classes = useStyles({
    heightSection: '44em',
    widthSection: '100vw',
    heightContainer: '92%',
    widthContainer: '90vw',
    heightForm: '68%',
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };


  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // const handleClickShowPasswordAnew = (event) => {
  //   event.preventDefault();
  //   setValues({ ...values, showPasswordAnew: !values.showPassword });
  // };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          props.authenticatedToTrue(true);
          if (res.user.displayName != null) {
            props.setuserName(res.user.displayName);
          }
        }
      })
      .catch((event) => {
        switch (event.code) {
          case 'auth/email-already-in-use':
            setErrors('Este correo ya existe');
            break;
          case 'auth/invalid-email':
            setErrors('Dirección de correo inválida');
            break;
          case 'auth/weak-password':
            setErrors('La contraseña debe tener al menos 6 caracteres');
            break;
          default:
            setErrors(event.message);
            break;
        }
      });
  };

  const handleGoogleLogin = (event) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        // This gives you a Google Access Token.
        // const token = res.credential.accessToken;
        // The signed-in user info.
        // const user = res.user;
        if (res.user) {
          props.authenticatedToTrue(true);
          props.setuserName(res.user.displayName);
        }
      })
      .catch((event) => {
        setErrors(event.message);
      });
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Crea tu cuenta</h1>
        <form className={classes.form} onSubmit={(event) => handleOnSubmit(event)}>
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

          <TextField
            required={true}
            error={false}
            variant={variant}
            type={values.showPassword ? 'text' : 'password'}
            label={textPlaceholder}
            value={password}
            helperText={helperText}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete='new-password'
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

          {/* <TextField
            required={true}
            error={false}
            variant={variant}
            type={values.showPasswordAnew ? 'text' : 'password'}
            label={textPlaceholderPasswordAnew}
            value={values.passwordAnew}
            helperText={helperText}
            onChange={handleChange('passwordAnew')}
            autoComplete='new-password'
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
          /> */}

          <Button type='submit' color='primary' variant='contained' classes={{ label: classes.textSize }}>
            CREAR CUENTA
          </Button>
          <span>{error}</span>
        </form>

        <section className={classes.sectionBottom}>
          <h2>O Regístrate con</h2>
          <div>
            <span>

              <Button onClick={(event) => handleGoogleLogin(event)}>
                <FontAwesomeIcon icon={faGoogle} size='3x' />
              </Button>
              {/* <Link to='/API-google'>
                <FontAwesomeIcon icon={faGoogle} size='3x' />
              </Link>
              <Link to='/API-facebook'>
                <FontAwesomeIcon icon={faFacebook} size='3x' />
              </Link>
              <Link to='/API-twitter'>
                <FontAwesomeIcon icon={faTwitter} size='3x' />
              </Link> */}
            </span>
          </div>
          <Link to='/' className='linkToLogin-logUp'>
            <h3>Iniciar sesión</h3>
          </Link>
        </section>
      </div>
    </main>
  );
};


const mapDispatchToProps = {
  authenticatedToTrue,
  setuserName,
};

export default connect(
  null,
  mapDispatchToProps
)(LogUp);

