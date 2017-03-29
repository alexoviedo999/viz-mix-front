import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Login from './containers/Login';

import Home from './containers/Home';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    { /* Catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);