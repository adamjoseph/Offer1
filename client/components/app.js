import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

import NavBar from './nav/nav_bar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App
