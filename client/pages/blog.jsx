import React from 'react';
import {Row, Grid} from 'react-bootstrap';
// import {Link} from 'react-router';

const BlogPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
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
