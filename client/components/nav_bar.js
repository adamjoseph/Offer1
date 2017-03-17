import React, { Component } from 'react';
import { Menu, Image, Input, Button } from 'semantic-ui-react';

class NavBar extends Component {

  render() {

    return (
      <Menu >
        <Menu.Item header>
          <Image src='../../offer1logo.png' size='small'/>
        </Menu.Item>
        <Menu.Item name="homeSellers" />
        <Menu.Item name="homeBuyers" />
        <Menu.Item name="agents" />
        <Menu.Item name="transactionVendors" />
        <Menu.Item name="howItWorks" />
        <Menu.Item position='right' name='login'/>
      </Menu>
    );
  }
}

export default NavBar
