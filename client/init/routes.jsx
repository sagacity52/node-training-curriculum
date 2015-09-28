import React from 'react';
import { Route } from 'react-router';

// Layouts
import ContainerLayout from 'client/layouts/container';

// Pages
import HomePage from 'client/pages/home';
import BlogPage from 'client/pages/blog';
import SkillsPage from 'client/pages/skills';
import ContactPage from 'client/pages/contactinfo';
import SecretPage from 'client/pages/secret';

export default (
  <Route handler={ContainerLayout}>
    <Route name='home' path='/' handler={HomePage} />
    <Route name='blog' path='/blog' handler={BlogPage} />
    <Route name='skills' path='/skills' handler={SkillsPage} />
    <Route name='contact' path='/contact' handler={ContactPage} />
    <Route name='secret' path='/secret' handler={SecretPage} />
  </Route>
);
