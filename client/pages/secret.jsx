import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Navigation} from 'react-router';

const SecretPage = React.createClass({

  mixins : [Navigation],
  
  componentDidMount() {
    let {userID} = this.context.router.getCurrentQuery();
    if (userID != 1) {
      this.replaceWith('/');
    };
  },

  render() {
    var color = {
      color : 'green',
    };

    return (
      <div className="container-fluid">
      	<Grid>
      		<Row>
              <Col md={12}>
                <h4 className='simplepad'>Bank Account: </h4>
                <div style={color}>$16,890,236,788.87</div>
                <h4 className='simplepad'>Tools: </h4>
                <ul>
                  <li>Milk. Lots of milk.</li>
                  <li>Danger Proof Milk Man Suit.</li>
                  <li>1954 Danger Proof "Milk" Truck.</li>
                </ul>
              </Col>
      		</Row>
        </Grid>
      </div>
    );
  },
});

export default SecretPage;
