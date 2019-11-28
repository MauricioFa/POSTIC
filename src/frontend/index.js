import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducers from './reducers/indexReducers';
import App from './routes/App';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  if (process.env.NODE_ENV === 'production') composeEnhancers = compose;
  else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(thunk)));
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
