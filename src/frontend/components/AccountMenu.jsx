import React from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color='inherit' aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>4 nuevas ventas </MenuItem>
        <MenuItem onClick={handleClose}>Salir</MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;
