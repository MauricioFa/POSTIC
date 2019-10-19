import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/registrar">
      <ListItem button color="secondary">
        <ListItemIcon>
          <AddCircleOutlineIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Nueva Venta" />
      </ListItem>
    </Link>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Informes" />
      </ListItem>
    </Link>
    <Link to="/pedidos">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
      </ListItem>
    </Link>
    <Link to="/clientes">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItem>
    </Link>
    <Link to="/productos">
      <ListItem button>
        <ListItemIcon>
          <LocalOfferIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
    </Link>
    <Link to="/configuracion">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Configuración" />
      </ListItem>
    </Link>
  </div>
);
