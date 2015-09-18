/* global document */
import React from 'react';
import router from 'client/init/router';

document.addEventListener('DOMContentLoaded', function() {
  router.run((Handler, state) => {
    React.render(
      <Handler params={state.params} query={state.query} />,
      document.getElementsByTagName('body')[0]
    );
  });
});
