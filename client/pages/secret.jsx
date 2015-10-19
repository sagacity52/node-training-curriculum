import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Navigation} from 'react-router';

const SecretPage = React.createClass({

  mixins : [Navigation],
  
  componentDidMount() {
    let {userID} = this.context.router.getCurrentQuery();
    if (userID != 1) {
      this.replaceWith('/');
    }
  },

  render() {
    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
              <Col md={12}>
                <h5 className="simplepad"><a href='http://instantcena.com/'>Secret Link</a></h5>
              </Col>
      		</Row>
        </Grid>
      </div>
    );
  },
});

export default SecretPage;
