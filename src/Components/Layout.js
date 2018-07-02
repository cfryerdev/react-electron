import React, { Fragment } from 'react';
import Navigation from './Navigation';

export default ({ children }) => 
  <Fragment>
    <Navigation />
    <div className="container-fluid">
      {children}
    </div>
  </Fragment>