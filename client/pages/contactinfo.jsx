import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
// import {Link} from 'react-router';

const ContactPage = React.createClass({

  getInitialState() {
    return {
      activeForm : false,
      firstName : '',
      lastName : '',
      phoneNumber : '',
      email : '',

      setContactRadio : '',

      submit : '',
      disabled : true,
    };
  },

  activateForm() {
    this.setState({activeForm : !this.state.activeForm});
  },

  handleText(field, event) {
    this.setState({[field] : event.target.value});
  },

  handleRadio(radio) {
    this.setState({setContactRadio : radio});
    this.setState({disabled : false});
  },

  isRadioChecked(radio) {
    return this.state.setContactRadio === radio;
  },

  handleSubmit(event) {
    this.setState({submit : 'I will be contacting you soon via ' + 
    (this.state.setContactRadio) + '.'});
  },

  render() {
    let fName = this.state.firstName;
    let lName = this.state.lastName;
    let pNum = this.state.phoneNumber;
    let em = this.state.email;

    let submitLabel = this.state.submit;
    let submitButton = this.state.activeForm ? 
    <button className='btn btn-primary simplepad'
    onClick={this.handleSubmit}
    disabled={this.state.disabled}>Submit</button> : null;

    let formFirst = this.state.activeForm ? <input className='simplepad'
      value={fName} placeholder="First Name"
      onChange={this.handleText.bind(null, 'firstName')}/> : null;

    let formLast = this.state.activeForm ? <input className='simplepad'
      value={lName} placeholder="Last Name"
      onChange={this.handleText.bind(null, 'lastName')}/> : null;

    let formEmail = this.state.activeForm ? <input className='simplepad'
      value={em} placeholder="example@domain.com"
      onChange={this.handleText.bind(null, 'email')}/> : null;

    let formPhone = this.state.activeForm ? <input className='simplepad'
      value={pNum} placeholder="(000)000-0000"
      onChange={this.handleText.bind(null, 'phoneNumber')}/> : null;

    let prefEmail = this.state.activeForm ? <input className='simplepad'
      type='radio' 
      onChange={this.handleRadio.bind(null, 'email')}
      checked={this.isRadioChecked('email')}/> : null;
    let prefPhone = this.state.activeForm ? <input className='simplepad'
      type='radio' 
      onChange={this.handleRadio.bind(null, 'phone')}
      checked={this.isRadioChecked('phone')}/> : null;

    return (
      <div className="container-fluid">
      	<Grid>
          <Row>
            <p>
              <div>Name: Jakob Booker</div>
              <div>Email: sagd52@gmail.com</div>
              <div>Phone: (520)979-9175</div>
            </p>
          </Row>
          <Row>
            <button className='btn btn-primary simplepad' 
            onClick={this.activateForm}>
            {this.state.activeForm ? 'Nevermind!' : 'Contact Me!'}</button>
          </Row>
          <Row>
            <Col sm={3}>
              {formFirst}
            </Col>
            <Col sm={3}>
              {formLast}
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              {prefEmail}{formEmail}
            </Col>
            <Col sm={3}>
              {prefPhone}{formPhone}
            </Col>
          </Row>
          <Row>
            <Col md={2}>
            {submitButton}
            {submitLabel} 
            </Col>       
          </Row>
        </Grid>
      </div>
    );
  },
});

export default ContactPage;
