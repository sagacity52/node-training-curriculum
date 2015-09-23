import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router';

const BlogPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
          		<Col>
            		<h1 className="basic_centered">Blog</h1>
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
      			<p>
      				<div> Welcome to my blog. In this blog I will talk about some of the </div>
      				<div> things that I have suffered while trying to learn react js. </div>
      				<div> 
      					<ul>
      						<li> How to set up react-bootstrap </li>
      						<li> How to use images </li>
      						<li> How to make links </li>
      					</ul>
      				</div>
      			</p>
      		</Row>
        </Grid>
      </div>
    );
  },
});

export default BlogPage;
