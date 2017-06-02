import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Home from './containers/Home';
import CardContainer from './containers/CardContainer';
import AppliedRoute from './components/AppliedRoute';
import Signup from './containers/Signup';
import NewScene from './containers/NewScene';
import Scenes from './containers/Scenes';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    {/*<Route path="/" exact render={(props)=> <Home {...props} {...childProps} />} /> */}

    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/card/:id" component={CardContainer} props={childProps}/>
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/scenes/new" exact component={NewScene} props={childProps} />
    <AppliedRoute path="/scenes/:id" exact component={Scenes} props={childProps} />
    { /* Catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);