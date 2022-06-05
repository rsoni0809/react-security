import React from 'react';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h1>{props.title}</h1>
      <p className="lead">New Technical Courses</p>
    </div>
  );
}

export default Jumbotron; 
