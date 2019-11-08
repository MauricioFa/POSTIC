import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function CardConfiguracion() {
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
          Opción 1
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
}
