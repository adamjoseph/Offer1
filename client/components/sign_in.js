import React, { Component } from 'react';
import { Link } from 'react-router';

class SignIn extends Component {

render() {
  return(
    <div className="ui one column center aligned grid">
      <div className="column six wide form-holder">
        <h2 className="center aligned header form-head"
          >Sign in or <Link to="/page1">Register</Link>
        </h2>
        <div className="ui form">
          <div className="field">
            <input type="text" placeholder="Email" />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" />
          </div>
          <div className="field">
            <input type="submit" value="Sign In" className="ui button large fluid green" />
          </div>
          <div className="inline field">


            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default SignIn
