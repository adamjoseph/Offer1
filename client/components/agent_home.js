import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class AgentHome extends Component {
  // componentWillMount() {
  //
  // }

  render() {
    if(!this.props.loggedInAgent){
      return (
        <div>
          <div className="ui active centered inline loader"></div>
        </div>
      );
    }
    const { fname, lname } = this.props.loggedInAgent.profile;
    return (
      <div>
        <h2 className="ui header center aligned" >Agent Home Page</h2>
        <h3 className="ui header center aligned" >Logged In As: {fname} {lname}</h3>
      </div>
    );
  }
}

 //export default AgentHome
 export default createContainer(() => {
  const loggedInAgent = Meteor.user();

  return { loggedInAgent };
}, AgentHome);
