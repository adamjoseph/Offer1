import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Agents } from '../../imports/collections/agents';
import { selectAgent } from '../actions/index';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { connect } from 'react-redux';

//import components
import AgentList from './agent_list';
//import AgentDetail from './agent_detail';
import AgentInspect from './agent_inspect';



class AdminPage extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="ui header center aligned">Adminstration Home</h1>
        <AgentInspect />
        <AgentList agents={this.props.agents} />

      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//
//   return bindActionCreators({ selectAgent: selectAgent }, dispatch)
// }



export default createContainer(() => {
  //set up subscription
  Meteor.subscribe('agents');

  //return an object
  return { agents: Agents.find({}).fetch() };
}, AdminPage);

//export default connect(mapStateToProps, mapDispatchToProps)(Container);
