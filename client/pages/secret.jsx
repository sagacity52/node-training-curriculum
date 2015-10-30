import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Navigation} from 'react-router';
import _ from 'lodash';

const SecretPage = React.createClass({

  mixins : [Navigation],

  getInitialState() {
    return {
      initialBankSavings : 16890236788.87,
      tools : [
        { sku : 'm1lk', name : 'Milk', type : 'Perishable Good', cost : 1.99},
        { sku : '5u1t', name : 'Danger Proof Suit', type : 'Armor', cost : 149.99},
        { sku : 'v3h1cl3.1', name : '1954 Danger Proof Truck', type : 'Vehicle', cost : 20000},
      ],

      isDisabled : true,
      temp : { sku : '', name : '', type : '', cost : 0},
    };
  },
  
  componentDidMount() {
    let {userID} = this.context.router.getCurrentQuery();
    if (userID == 1) {
      this.replaceWith('/');
    };
  },

  handleBuy() {
    var temp = this.state.temp;
    console.log(this.state.temp);
    if (temp.sku === '' || temp.name === '' || temp.type === '' || temp.cost === 0) {
      if (temp.sku === '') {
        console.log('needs sku');
      }
      if (temp.name === '') {
        console.log('needs name');
      }
      if (temp.type === '') {
        console.log('needs type');
      }
      if (temp.cost === 0) {
        console.log('needs cost');
      }
    } else {
      var push = { sku : temp.sku, name : temp.name, type : temp.type, cost : temp.cost };
      this.resetTemp();
      this.state.tools.push(push);
    }
    console.log(this.state.tools);

  },

  resetTemp() {
    var temp = this.state.temp;
    temp.sku = '';
    temp.name = '';
    temp.type = '';
    temp.cost = 0;
  },

  handleText(field, event) {
    var temp = this.state.temp;
    // var stemp = _.pluck(temp, [field]);

    if (field === 'sku') {
      temp.sku = event.target.value;
    } else if (field === 'name') {
      temp.name = event.target.value;
    } else if (field === 'type') {
      temp.type = event.target.value;
    } else if (field === 'cost') {
      temp.cost = event.target.value;
    }
    
    this.setState({temp});
  },

  render() {
    var green = {
      color : 'green',
    };
    var red = {
      color : 'red',
    };

    let costs = _.map(this.state.tools, 'cost');
    let tSku = this.state.temp.sku;
    let tName = this.state.temp.name;
    let tType = this.state.temp.type;
    let tCost = this.state.temp.cost;

    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
              <Col md={12}>
                <h4 className='simplepad basic-center'>Bank Account: </h4>
                <Col md={2}>
                  <h5 className='simplepad'>Savings: </h5>
                  <div style={green}>${this.state.initialBankSavings}</div>
                </Col>
                <Col md={2}>
                  <h5 className='simplepad'>Expenses:</h5>
                  <div style={red}>Milk : ${this.state.tools[0].cost}</div>
                  <div style={red}>Suit : ${this.state.tools[1].cost}</div>
                  <div style={red}>Truck : ${this.state.tools[2].cost}</div>
                  <div style={red}>Total : ${_.sum(costs).toFixed(2)}</div>
                </Col>
                  <Col md={8}>
                    <h4 className='simplepad'>Shop: </h4>
                    <input className='simplepad' placeholder='SKU'
                    value={tSku}
                    onChange={this.handleText.bind(null, 'sku')}></input>

                    <input className='simplepad' placeholder='Name'
                    value={tName}
                    onChange={this.handleText.bind(null, 'name')}></input>

                    <input className='simplepad' placeholder='Type'
                    value={tType}
                    onChange={this.handleText.bind(null, 'type')}></input>
                    
                    <input className='simplepad' placeholder='Cost'
                    value={tCost}
                    onChange={this.handleText.bind(null, 'cost')}></input>
                </Col>
              </Col>
      		</Row>
          <Row>
            <Col md={12}>
              <Col md={3}>
                <h4 className='simplepad'>Tools: </h4>
                <div></div>
              </Col>
              <Col md={4}>
              </Col>
              <Col md={5}>
                <button className='btn btn-primary simplepad'
                onClick={this.handleBuy}>Buy!</button>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  },
});

export default SecretPage;
