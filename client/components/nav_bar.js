import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';

import Login from './login_btn';
import Logout from './logout_btn';

class NavBar extends Component {

  render() {
    console.log('re-render');
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
          {Meteor.user() === null ? <Login /> : <Logout />}
        </div>
      </div>
    );
  }
}

export default NavBar
{/* <div class="ui menu">
  <div class="header item">
    Our Company
  </div>
  <a class="item">
    About Us
  </a>
  <a class="item">
    Jobs
  </a>
  <a class="item">
    Locations
  </a>
</div> */}
