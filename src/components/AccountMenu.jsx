import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, MenuItem, Avatar } from '@material-ui/core';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
import { authenticatedToTrue } from '../actions/indexActions';

const AccountMenu = (props, { userName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
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
        history.push('/');
      })
      .catch((event) => {
        alert(event.message);
      });
  };

  return (
    <div>
      <Avatar alt='Avatar' onClick={handleClick}>
        <AccountCircleTwoToneIcon />
      </Avatar>
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
  };
};

const mapDispatchToProps = {
  authenticatedToTrue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountMenu);
