import React, { Component } from 'react';
import { Link } from 'react-router';

class ThankYou extends Component {
  render() {
    return(
      <div className='ui container'>
        <h1 className='ui header center aligned'>Thank You</h1>
        <h2 className='ui header center aligned'>Your Applicaion has been received.</h2>
      </div>
    );
  }
}

export default ThankYou
