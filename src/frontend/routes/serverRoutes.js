import Dashboard from '../containers/Dashboard';
import OrdersFull from '../containers/OrdersFull';
import Customers from '../containers/Customers';
import Products from '../containers/Products';
import NotFound from '../containers/NotFound';
import RegisterSale from '../containers/RegisterSale';
import ConfigContainer from '../containers/ConfigContainer';
import Login from '../containers/Login';
import LogUp from '../containers/LogUp';
import RecoverPassword from '../containers/RecoverPassword';

const serverRoutes = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/ordersfull',
    component: OrdersFull,
    exact: true,
  },
  {
    path: '/customers',
    component: Customers,
    exact: true,
  },
  {
    path: '/products',
    component: Products,
    exact: true,
  },
  {
    path: '/config',
    component: ConfigContainer,
    exact: true,
  },
  {
    path: '/logUp',
    component: LogUp,
    exact: true,
  },
  {
    path: '/newpassword',
    component: RecoverPassword,
    exact: true,
  },
  {
    path: '/registersale',
    component: RegisterSale,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
