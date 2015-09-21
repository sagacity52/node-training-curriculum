import React from 'react';

const Home = React.createClass({
  render() {
    return (
    <div class="container-fluid">
    	<h1>Jakob's Page</h1>
      	<div className="row">
      		<div className="col-md-2">
      		Home
      		</div>
      		<div className="col-md-2">
      		Blog
      		</div>
      		<div className="col-md-2">
      		Skills
      		</div>
      		<div className="col-md-2">
      		Contact
      		</div>
      	</div>
      	<div className="row">
      		<h2 className="basic_centered">
      		Home
      		</h2>
      	</div>
      </div>
    );
  },
});

export default Home;
