import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
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

const App = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {isAuthenticated && <Route exact path='/registersale' component={RegisterSale} />}
          {isAuthenticated && <Route exact path='/ordersfull' component={OrdersFull} />}
          {isAuthenticated && <Route exact path='/customers' component={Customers} />}
          {isAuthenticated && <Route exact path='/products' component={Products} />}
          {!isAuthenticated && <Route exact path='/logUp' component={LogUp} />}
          <Route exact path='/' component={isAuthenticated ? Dashboard : Login} />
          <Route exact path='/newpassword' component={RecoverPassword} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(App);
