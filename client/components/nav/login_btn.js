import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className="link item">
      <Link to='/' > Sign In </Link>
      </div>
    );
  }
}

export default Login
