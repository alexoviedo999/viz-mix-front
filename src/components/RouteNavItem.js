import React from 'react';
import { Route } from 'react-router-dom';
import { NavItem } from 'rebass';

var navStyle = {
  color: 'red'
}

export default (props) => (
  <Route path={props.href} exact children={({ match }) => (
    <NavItem is="a" {...props} style={match ? navStyle : {} }>{ props.children }</NavItem>
  )}/> 
);