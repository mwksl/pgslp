import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import History from './containers/History';

const routes = (
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route name="history" path="/history" component={History} />
      </Route>
  </Router>
);

module.exports = routes;
