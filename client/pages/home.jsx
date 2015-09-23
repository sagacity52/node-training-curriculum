import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router';

import profile from 'client/assets/images/Profile.jpg';

const Home = React.createClass({
  render() {
    return (
    <div className="container-fluid">
      <Grid>
      	<Row> 
        <img src={profile} className="img-reponsive" alt="Jakob Booker"></img>
          <Col>
            <h1 className="basic_centered">Home</h1>
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
          <h5>Things I'm Good At:</h5>
          <ul>
            <li> Video Games </li>
            <li> Selective Listening </li>
            <li> Procrastinating </li>
            <li> Finishing Tasks </li>
            <li> Sleeping </li>
            <li> Video Games </li>
          </ul>
        </Row>
        <Row>
          <h5>Dream Jobs:</h5>
          <ul>
            <li> Blizzard Entertainment </li>
            <li> Riot Games </li>
            <li> Indie Developer </li>
            <li> Colony American Homes </li>
          </ul>
        </Row>
        <Row>
        <h5>Why I Want To Develop: <small> Particularly video games </small></h5>
        <p>
          <div>I want to develop because there are certain aspects
          about developing that bring people together.</div>
          <div>In particular, developing video games is what I desire most.
          Video games have the power to bring</div>
          <div>people together, whether
          on the couch or online,
          I just want to see people have fun with
          with </div>
          <div>what I can develop for them.</div>
        </p>
        </Row>
        </Grid>
      </div>
    );
  },
});

export default Home;
