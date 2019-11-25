import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
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
import InvoiceToPdf from '../containers/InvoiceToPdf';
import Layout from '../components/Layout';
import firebaseConfig from '../firebase_config/fbconfig';

firebase.initializeApp(firebaseConfig);

const App = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {isAuthenticated && <Route exact path='/registersale' component={RegisterSale} />}
          {isAuthenticated && <Route exact path='/ordersfull' component={OrdersFull} />}
          {isAuthenticated && <Route exact path='/customers' component={Customers} />}
          {isAuthenticated && <Route exact path='/products' component={Products} />}
          {isAuthenticated && <Route exact path='/config' component={ConfigContainer} />}
          {isAuthenticated && <Route exact path='/invoicepdf' component={InvoiceToPdf} />}
          {!isAuthenticated && <Route exact path='/logUp' component={LogUp} />}
          {isAuthenticated && <Route exact path='/logUp' component={Dashboard} />}

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
