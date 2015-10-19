import React from 'react';
import {Row, Grid} from 'react-bootstrap';
// import {Link} from 'react-router';

import profile from 'client/assets/images/Profile.jpg';
import hero from 'client/assets/images/TheRealMilkman.jpg';

const Home = React.createClass({

  getInitialState() {
    return { 
      // Name 
      firstName : 'Jakob',
      lastName : 'Booker',
      isHero : false,
      heroFirstName : 'The',
      heroLastName : 'Milkman',

      // Picture
      currentProf : '',

    };
  },

  buttonPress() {
    this.setState({isHero : !this.state.isHero});
    if (this.state.isHero)
      this.setState({currentProf : profile});
    else
      this.setState({currentProf : hero});
  },

  setPicture() {
    return this.state.currentProf;
  },

  render() {
    let currentFirstName = this.state.isHero ? this.state.heroFirstName : this.state.firstName;
    let currentLastName = this.state.isHero ? this.state.heroLastName : this.state.lastName;

    return (
      <div className='container-fluid'>
        <Grid>
          <Row>
            <img src={this.setPicture()}></img>
          </Row>
          <Row>
            <h2> {currentFirstName} {currentLastName}</h2>
          </Row> 
          <Row>
            <h5>Things I'm Good At:</h5>
            <ul>
              <li> Video Games </li>
              <li> Selective Listening </li>
              <li> Procrastinating </li>
              <li> Complaining </li>
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
          <Row>
            <button className='btn btn-primary'
            onClick = {this.buttonPress}>
            {this.state.isHero ? 'Day Job' : 'Night Job'}</button>
          </Row>
        </Grid>
      </div>
    );
  },
});

export default Home;
