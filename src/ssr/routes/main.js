import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers/indexReducers';
import initialState from '../../frontend/mocks/initialState';

const dotenv = require('dotenv');
const render = require('../render/indexRender');

dotenv.config();

const main = (req, res, next) => {
  try {
    const sheets = new ServerStyleSheets();
    const store = createStore(reducer, { ...initialState, urlApiProducts: process.env.URL_API_PRODUCTS });
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
