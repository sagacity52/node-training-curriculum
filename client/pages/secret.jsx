import React from 'react';
import {Row, Col, Grid, DropdownButton, MenuItem} from 'react-bootstrap';
import {Navigation} from 'react-router';
import _ from 'lodash';

const SecretPage = React.createClass({

  mixins : [Navigation],

  getInitialState() {
    return {
      initialBankSavings : 16890236788.87,
      tools : [
        { sku : 'm1lk', name : 'Milk', type : 'Perishable Good', cost : 1.99},
        { sku : '5u1t', name : 'Milk Suit', type : 'Armor', cost : 149.99},
        { sku : 'v3h1cl3.1', name : 'Milk Truck', type : 'Vehicle', cost : 20000},
      ],

      isDisabled : true,
      temp : { sku : '', name : '', type : '', cost : ''},
      submit : '',

      search : '',
      searchCost : '',
      drop : '',
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
    if (temp.sku === '' || temp.name === '' || temp.type === '' || temp.cost === '') {
      this.setState({submit : 'Missing 1 or more fields'});
    } else {
      var push = { sku : temp.sku, name : temp.name, type : temp.type, cost : temp.cost };
      this.resetTemp();
      this.state.tools.push(push);
    }
  },

  resetTemp() {
    var temp = this.state.temp;
    temp.sku = '';
    temp.name = '';
    temp.type = '';
    temp.cost = '';

    this.setState({submit : ''});
  },

  handleCosts() {
    if (! this.state.tools.length) {
      return null;
    }

    return _.map(this.state.tools, (tool) => {
      return (
        <div>
          <span> {tool.name}:</span> <span>${tool.cost}</span>
        </div>
      );
    });
  },

  handleText(field, event) {
    var temp = this.state.temp;

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

  handleSearch(field, event) {
    this.setState({[field] : event.target.value});
  },

  handleDrop(key) {
    this.setState({drop : key});
  },

  showTools(search, searchCost) {
    let tools = this.state.tools;
    let filteredTools = tools;

    if (! this.state.tools.length) {
      return null;
    }

    // Search only Filter
    if (search) {
      filteredTools = _.filter(tools, (tool) => {
        return _.includes(tool.name, search) ? tool.name : null;
      });
    }

    // Cost only Filter
    if (searchCost) {
      if (this.state.drop) {
        filteredTools = _.filter(tools, (tool) => {
          return tool.cost < searchCost;
        });
      } else {
        filteredTools = _.filter(tools, (tool) => {
          return tool.cost > searchCost;
        });
      }
    }

    return _.map(filteredTools, (tool) => {
      return (
        <div>
          <span>{tool.name}: </span><span>{tool.sku}, </span><span>{tool.type}, </span>
          <span>${tool.cost}</span>
        </div>
      );
    });
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
    let submitLabel = this.state.submit;
    let currentBankSavings = this.state.initialBankSavings - _.sum(costs).toFixed(2);

    let search = this.state.search;
    let searchCost = this.state.searchCost;

    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
              <Col md={12}>
                <h4 className='simplepad basic-center'>Bank Account: </h4>
                <Col md={2}>
                  <h5 className='simplepad'>Savings: </h5>
                  <div style={green}>${currentBankSavings.toFixed(2)}</div>
                  <h5 className='simplepad'>Expenses:</h5>
                  <div style={red}>{this.handleCosts()}</div>
                  <div style={red}>Total : ${_.sum(costs).toFixed(2)}</div>
                </Col>
                <Col md={10}>
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

                   <button className='btn btn-primary simplepad'
                   onClick={this.handleBuy}>Buy!</button>
                   {submitLabel}
               </Col>
              </Col>
          </Row>
          <Row>
            <Col md={3} lg={4}>
              <h4 className='simplepad'>Search by name: </h4>
              <input className='simplepad' value={search} placeholder="Item to search"
              onChange={this.handleSearch.bind(null, 'search')}/>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={4}>
              <h4 className='simplepad'>Search by cost: </h4>
            </Col>
          </Row>
          <Row>
            <Col md={5} lg={5}>
              <DropdownButton className='simplepad' title='Cost' id='dropdown-size-medium'>
                  <MenuItem eventKey='1'
                  onSelect={this.handleDrop.bind(null, true)}>
                  Less than
                  </MenuItem>
                  <MenuItem eventKey='2'
                  onSelect={this.handleDrop.bind(null, false)}>
                  Greater than
                  </MenuItem>
              </DropdownButton>
              <input className='simplepad' value={searchCost} placeholder="Amount to search"
                onChange={this.handleSearch.bind(null, 'searchCost')}/>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <h4 className='simplepad'>Tools: </h4>
              <div></div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className='simplepad'>{this.showTools(search, searchCost)}</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  },
});

export default SecretPage;
