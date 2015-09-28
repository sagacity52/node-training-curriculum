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
        </Grid>
      </div>
    );
  },
});

export default SkillsPage;
