import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import OrdersFull from '../containers/OrdersFull';
import Customers from '../containers/Customers';
import Products from '../containers/Products';
import NotFound from '../containers/NotFound';
import RegisterSale from '../containers/RegisterSale';
import Login from '../containers/Login';
import LogUp from '../containers/LogUp';
import RecoverPassword from '../containers/RecoverPassword';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/registersale' component={RegisterSale} />
        <Route exact path='/ordersfull' component={OrdersFull} />
        <Route exact path='/customers' component={Customers} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logUp' component={LogUp} />
        <Route exact path='/recoverpass' component={RecoverPassword} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
