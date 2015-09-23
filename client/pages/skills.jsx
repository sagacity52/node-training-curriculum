import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router';

const SkillsPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
          		<Col>
            		<h1 className="basic_centered">Skills</h1>
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
          <Row>
            <Col md={4}>
              <h3> My Skills </h3>
              <ul>
                <li><a href='https://facebook.github.io/react/'>React</a></li>
                <li>Java</li>
                <li>C/C++/C#</li>
                <li><a href='https://unity3d.com/unity'>Unity</a></li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  },
});

export default SkillsPage;
