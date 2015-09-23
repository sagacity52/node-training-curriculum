import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router';

const ContactPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
          		<Col>
            		<h1 className="basic_centered">Contact Info</h1>
          		</Col>
      			<Col md={1}>
      		  		<h4 className="basic_centered"><Link to={'/'}>Home</Link></h4>
      			</Col>
      			<Col md={1}>
            		<h4 className="basic_centered"><Link to={'/blog'}>Blog</Link></h4>
          		</Col>
      			<Col md={1}>
          			<h4 className="basic_centered"><Link to={'/skills'}>Skills</Link></h4>
          		</Col>
  				<Col md={1}>
            		<h4 className="basic_centered"><Link to={'/contact'}>Contact</Link></h4>
          		</Col>
      		</Row>
        </Grid>
      </div>
    );
  },
});

export default ContactPage;
