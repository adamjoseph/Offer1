import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import Login from './login_btn';
import Logout from './logout_btn';

class NavBar extends Component {

  render() {
    //console.log('re-render');
    return (
      <div className="ui menu nav-bar" >
        <div className="header item">
          <Image src='../../offer1logo.png' size='small'/>
        </div>
        <div className="link item" >Home Sellers</div>
        <div className="link item" >Home Buyers</div>
        <div className="link item" >Agents</div>
        <div className="link item" >Transaction Vendors</div>
        <div className="link item" >How It Works</div>
        <div className="right menu" >
          {this.props.userId ? <Logout /> : <Login />}
        </div>
      </div>
    );
  }
}

// export default NavBar
export default createContainer(() => {
  const userId = Meteor.userId();

  return { userId };
}, NavBar);
