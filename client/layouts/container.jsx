import React from 'react';
import Router from 'react-router';

import 'client/assets/sass/app.scss';

const ContainerLayout = React.createClass({
  render() {
    return (
      <div className='container'>
        <Router.RouteHandler {...this.props} />
      </div>
    );
  },
});

export default ContainerLayout;
