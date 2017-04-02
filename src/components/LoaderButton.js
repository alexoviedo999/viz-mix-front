import React from 'react';
import { Button } from 'rebass';
import Icon from 'react-geomicons';


export default ({ isLoading, text, loadingText, disabled = false, ...props }) => (
  <Button disabled={ disabled || isLoading } {...props}>
    { isLoading && <Icon name="refresh" className="spinning" /> }
    { ! isLoading ? text : loadingText }
  </Button>
);