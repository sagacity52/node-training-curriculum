import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

const LodashPage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <Grid>
          <Row>
            <Col md={4}>
              <h4 className='simplepad'>Lodash</h4>
              <small className='simplepad'>How I used Lodash.</small>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p>
                <h4>_.map</h4>
                <div>_.map(colletion, [iteratee=_.identity], [thisArg])</div>
                <div>This function iterates through a collection or an array and returns</div>
                <div>the an array based on [thisArg]. </div>
                <div>I used _.map to iterate through my tools array so that I can pull</div>
                <div>the filtered list of tools from it.</div>
              </p>
              <p>
                <h4>_.filter</h4>
                <div>_.filter(collection, [predicate=_.identity], [thisArg])</div>
                <div>This function iterates through an array similar to _.map, but returns</div>
                <div>truthy if [thisArg] is found in the collection.</div>
                <div>I used this _.filter to filter my search options.</div>
              </p>
              <p>
                <h4>_.includes</h4>
                <div>_.includes(collection, target, [fromIndex=0])</div>
                <div>This function is similar to _.filter except it returns truthy for </div>
                <div>any element in the collection matches the target.</div>
                <div>I used _.include to compare the target in the search box to</div>
                <div>the elements in my tools array</div>
              </p>
              <p>
                <h4>_.sum</h4>
                <div>_.sum(collection, [iteratee], [thisArg])</div>
                <div>This function iterates through a collection and sumates the values.</div>
                <div>I used _.sum to sum up the value of the costs in expenses</div>
                <div>to subtract from the bank account.</div>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  },

});

export default LodashPage;
