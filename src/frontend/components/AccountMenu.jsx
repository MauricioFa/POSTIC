import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Avatar, Typography } from '@material-ui/core';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { authenticatedToTrue, setUserName } from '../actions/indexActions';

const useStyles = makeStyles((theme) => ({
  iconsHeaderContainer: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  notificationIcon: {
    fontSize: '1.2em',
    color: '#FFFFFF',
    backgroundColor: '#F33333',
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      position: 'relative',
      bottom: '4px',
      left: '4px',
    },
  },
}));

const AccountMenu = (props) => {
  const classes = useStyles();
  const { isAuthenticated, userName, productsList } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const amountProductsAlertInStock = productsList.filter((item) => item.inStock <= item.limitInStock).length;

  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const history = useHistory();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = (event) => {
    setAnchorEl(null);
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.authenticatedToTrue(false);
        props.setUserName('Anónimo');
        history.push('/');
      })
      .catch((event) => {
        alert(event.message);
      });
  };

  return (
    <div>
      {isAuthenticated && (
        <div className={classes.iconsHeaderContainer}>
          {amountProductsAlertInStock > 0 && (
            <Link to='/products'>
              <Avatar variant='rounded' className={classes.notificationIcon}>
                {amountProductsAlertInStock}
                <NotificationsIcon fontSize='small' />
              </Avatar>
            </Link>
          )}
          <Avatar alt='Avatar' onClick={handleClickAvatar} className={classes.avatar}>
            <AccountCircleTwoToneIcon />
          </Avatar>
        </div>
      )}
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>{userName}</MenuItem>
        <MenuItem onClick={(event) => handleSignOut(event)}>
          <ListItemIcon>
            <ExitToAppIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit'>Salir</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    isAuthenticated: state.isAuthenticated,
    productsList: state.products,
  };
};

const mapDispatchToProps = {
  authenticatedToTrue,
  setUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);
