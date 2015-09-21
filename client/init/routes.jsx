import React from 'react';
import { Route } from 'react-router';

// Layouts
import ContainerLayout from 'client/layouts/container';

// Pages
import Home from 'client/pages/home';
import Blog from 'client/pages/blog';
import Skills from 'client/pages/skills';
import Contact from 'client/pages/contactinfo';

export default (
  <Route handler={ContainerLayout}>
    <Route name='home' path='/' handler={Home} />
    <Route name='blog' path='/blog' handler={Blog} />
    <Route name='skills' path='/skills' handler={Skills} />
    <Route name='contact' path='/contact' handler={Contact} />
  </Route>
);
