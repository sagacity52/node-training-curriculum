import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
// import {Link} from 'react-router';

const SecretPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
              <Col md={12}>
                <h5 className="basic_centered"><a href='http://www.nyan.cat/'>Secret Link</a></h5>
              </Col>
      		</Row>
        </Grid>
      </div>
    );
  },
});

export default SecretPage;
