import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Home from './containers/Home';
import CardContainer from './containers/CardContainer';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/card/:id" component={CardContainer} props={childProps}/>
    { /* Catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);
