import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
// import {Link} from 'react-router';

const SkillsPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
      	<Grid>
          <Row>
            <Col md={4}>
              <h3> My Skills </h3>
              <ul>
                <li><a href='https://facebook.github.io/react/'>React</a></li>
                <li>Java</li>
                <li>C/C++
                  <ul>
                    <li>C#</li>
                  </ul>
                </li>
                <li><a href='https://unity3d.com/unity'>Unity</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className = 'simplepad'>
                <h4>React Lessons</h4>
                <h5>Number 1: States</h5>
                <div>React states are like variables, except for js components. </div>
                <div>Js components are affected by the current state and are visualized </div>
                <div>through the render method. A component can have as many states as needed.</div>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  },
});

export default SkillsPage;
