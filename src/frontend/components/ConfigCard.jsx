import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const ConfigCard = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3'>
          {props.title}
        </Typography>
        <Typography component='p'>Ingresar texto para configurar</Typography>
        <Switch
          checked={state.checkedB}
          onChange={handleChange('checkedB')}
          value='checkedB'
          color='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Paper>
    </div>
  );
};

export default ConfigCard;
