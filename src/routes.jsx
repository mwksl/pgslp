import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import History from './containers/History';

const routes = (
  <Router history={hashHistory}>
    <Route>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
      </Route>
      <Route path="/history" component={History} />
    </Route>
  </Router>
);

module.exports = routes;
