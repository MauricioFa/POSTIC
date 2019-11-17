import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MainItemsList = (
  <div>
    <Link to='/registersale'>
      <ListItem button color='secondary'>
        <ListItemIcon>
          <AddCircleOutlineIcon color='secondary' />
        </ListItemIcon>
        <ListItemText primary='Nueva Venta' />
      </ListItem>
    </Link>
    <Link to='/'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Informes' />
      </ListItem>
    </Link>
    <Link to='/ordersfull'>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Pedidos' />
      </ListItem>
    </Link>
    <Link to='/customers'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Clientes' />
      </ListItem>
    </Link>
    <Link to='/products'>
      <ListItem button>
        <ListItemIcon>
          <LocalOfferIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Productos' />
      </ListItem>
    </Link>
    <Link to='/config'>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Configuración' />
      </ListItem>
    </Link>
  </div>
);

export default MainItemsList;
