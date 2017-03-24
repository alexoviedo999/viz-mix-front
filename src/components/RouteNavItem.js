import React from 'react';
import { Route } from 'react-router-dom';
import { NavItem } from 'rebass';

export default (props) => (
  <Route path={props.href} exact children={({ match }) => (
    <NavItem is="a" {...props} active={ match ? true : false }>{ props.children }</NavItem>
   

  )}/>  //* TODO: fix active prop error
);