import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Home from './containers/Home';
import CardContainer from './containers/CardContainer';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/card/:id" component={CardContainer}/>
    { /* Catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);