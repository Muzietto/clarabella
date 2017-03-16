import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';

// require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)