import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Agents } from '../../imports/collections/agents';
import { selectAgent, getAgents } from '../actions/index';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { connect } from 'react-redux';

//import components
import AgentList from './agent_list';
//import AgentDetail from './agent_detail';
import AgentInspect from './agent_inspect';



class AdminPage extends Component {
  componentWillMount() {
    //getAgents();

  }

  render() {
    return (
      <div className="ui container">
        <h1 className="ui dividing header center aligned">Adminstration Home</h1>
        <div className="ui grid">
          <div className="eleven wide column">
            <AgentInspect />
          </div>
          <div className="five wide column">
            <AgentList agents={this.props.agents} />
          </div>
        </div>
      </div>
    );
  }
}


export default createContainer(() => {
  //set up subscription
  const subscription = Meteor.subscribe('agents');
  const loading = !subscription.ready();
  const agents = Agents.find({'reviewed': false }, { limit: 3 }).fetch();

  //return an object
  return { agents, loading };
}, AdminPage);

//export default connect(mapStateToProps, mapDispatchToProps)(Container);
