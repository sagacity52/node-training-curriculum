import React from 'react';
import {Row, Grid} from 'react-bootstrap';
// import {Link} from 'react-router';

const ContactPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
          <Row>
            <p>
              <div>Name: Jakob Booker</div>
              <div>Email: sagd52@gmail.com</div>
              <div></div>
              <div></div>
              <div></div>
            </p>
          </Row>
        </Grid>
      </div>
    );
  },
});

export default ContactPage;
