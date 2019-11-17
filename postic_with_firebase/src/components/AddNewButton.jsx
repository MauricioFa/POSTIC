import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AddNewButton = () => {
  const classes = useStyles();
  return (
    <>
      <Link to='/registersale'>
        <Fab color='primary' aria-label='add' className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};

export default AddNewButton;
