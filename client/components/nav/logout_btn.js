import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Logout extends Component {
  logOut() {
    Meteor.logout();
    console.log('logged out');
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="link item" onClick={this.logOut}>
      <Link to='/' > Sign Out </Link>
      </div>
    );
  }
}

export default Logout
