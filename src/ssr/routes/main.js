import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers/indexReducers';
import initialState from '../utils/initialState';

const axios = require('axios');
const render = require('../render/indexRender');
require('dotenv').config();

const { URL_API_PRODUCTS } = process.env;

const main = async (req, res, next) => {
  let initialStateFix = { ...initialState };
  try {
    const dataGetProducts = await axios.get(URL_API_PRODUCTS);
    initialStateFix = { ...initialStateFix, products: dataGetProducts.data };
  } catch (error) {
    next(err);
  }

  try {
    const sheets = new ServerStyleSheets();
    const store = createStore(reducer, { ...initialStateFix, urlApiProducts: URL_API_PRODUCTS });
    const html = renderToString(
      sheets.collect(
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            <Layout>{renderRoutes(Routes)}</Layout>
          </StaticRouter>
        </Provider>
      )
    );
    const css = sheets.toString();
    const preloadedState = store.getState();
    res.send(render(html, css, preloadedState));
  } catch (err) {
    next(err);
  }
};

module.exports = main;
