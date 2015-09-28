import React from 'react';
import Router from 'react-router';
import {Row, Col, Grid, Nav, NavItem} from 'react-bootstrap';

import 'client/assets/sass/app.scss';

const ContainerLayout = React.createClass({

  mixins : [Router.Navigation],

  getInitialState() {
    return {
      activeTab : '/',
    };
  },

  onSelect(path) {
    this.setState({ activeTab : path });
    this.transitionTo(path);
  },


  render() {

    const isHomeActive = this.state.activeTab === '/';
    const isBlogActive = this.state.activeTab === '/blog';
    const isSkillsActive = this.state.activeTab === '/skills';
    const isContactActive = this.state.activeTab === '/contact';
    const isSecretActive = this.state.activeTab === '/secret';

    return (
      <div className='container'>
      <Grid>
      	<Row>
            <Col>
              <Nav bsStyle="pills">
                <NavItem eventKey={1} 
                  onClick={this.onSelect.bind(null, '/')}
                  active={isHomeActive}>Home</NavItem>
                <NavItem eventKey={2} 
                  onClick={this.onSelect.bind(null, '/blog')}
                  active={isBlogActive}>Blog</NavItem>
                <NavItem eventKey={3} 
                  onClick={this.onSelect.bind(null, '/skills')}
                  active={isSkillsActive}>Skills</NavItem>
                <NavItem eventKey={4} 
                  onClick={this.onSelect.bind(null, '/contact')}
                  active={isContactActive}>Contact Info</NavItem>
                <NavItem eventKey={5} 
                  onClick={this.onSelect.bind(null, '/secret')}
                  active={isSecretActive}>Secret</NavItem>
              </Nav>
            </Col>
          </Row>
        </Grid>
        
        <Router.RouteHandler {...this.props} />

      </div>
    );
  },
});

export default ContainerLayout;
