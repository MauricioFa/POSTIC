import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountMenu from './AccountMenu';
import Logo from '../assets/statics/Logo_Postic.svg';
import MainItemsList from './MainItemsList';
import Theme from '../assets/styles/Theme';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 16,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
      color: '#FFFFFF',
    },
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

const routesForHeader = [
  { route: '/registersale', title: 'Vender' },
  { route: '/invoicepdf', title: 'Factura a PDF' },
  { route: '/ordersfull', title: 'Pedidos' },
  { route: '/customers', title: 'Clientes' },
  { route: '/products', title: 'Productos' },
  { route: '/config', title: 'Configuración Cuenta' },
  { route: '/logUp', title: 'Crear cuenta' },
  { route: '/', title: 'Dashboard' },
  { route: '/newpassword', title: 'Nueva clave' },
];

const Layout = (props) => {
  const classes = useStyles();
  const { isAuthenticated } = props;
  const [open, setOpen] = React.useState(false);
  const [titleHeader, setTitleHeader] = React.useState('Loading');

  const history = useHistory();
  React.useEffect(() => {
    setOpen(false);
    let title = routesForHeader.filter((item) => item.route === history.location.pathname);
    title = title[0] ? title[0].title : 'Not Found';
    title = !isAuthenticated && title === 'Dashboard' ? 'Ingresar' : title;
    setTitleHeader(title);
  }, [history.location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            {isAuthenticated && (
              <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
              <Link to='/'>POSTIC | {titleHeader}</Link>
            </Typography>
            <AccountMenu />
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      {isAuthenticated && open && (
        <Drawer
          variant='permanent'
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <Logo height='42' fill='#009999' />
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{MainItemsList}</List>
          <Divider />
        </Drawer>
      )}

      {props.children}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Layout);
