import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';  
import configureStore from './store/index';

const store = configureStore();

// require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);