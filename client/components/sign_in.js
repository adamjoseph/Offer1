import React, { Component } from 'react';

class SignIn extends Component {

render() {
  return(
    <div className="ui one column center aligned grid">
      <div className="column six wide form-holder">
        <h2 className="center aligned header form-head">Sign in</h2>
        <div className="ui form">
          <div className="field">
            <input type="text" placeholder="username" />
          </div>
          <div className="field">
            <input type="password" placeholder="password" />
          </div>
          <div className="field">
            <input type="submit" value="sign in" className="ui button large fluid green" />
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
