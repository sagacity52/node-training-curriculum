import React from 'react';
import { Route } from 'react-router';

// Layouts
import ContainerLayout from 'client/layouts/container';

// Pages
import Home from 'client/pages/home';

export default (
  <Route handler={ContainerLayout}>
    <Route name='home' path='/' handler={Home} />
  </Route>
);
