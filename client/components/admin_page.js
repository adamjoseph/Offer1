import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Agents } from '../../imports/collections/agents';
import { selectAgent } from '../actions/index';
import { bindActionCreators } from 'redux';

//import components
import AgentDetail from './agent_detail';
import AgentInspect from './agent_inspect';



class AdminPage extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="ui header center aligned">Adminstration Home</h1>
        <AgentInspect />
        <div className="agent-list">
        <div className="ui cards">
          {this.props.agents.map(agent =>
            <AgentDetail key={agent._id}
              agent={agent}
              onClick={() => this.props.selectAgent(agent)}
            />
          )}
        </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectAgent: selectAgent }, dispatch)
}


export default createContainer(() => {
  //set up subscription
  Meteor.subscribe('agents');

  //return an object
  return { agents: Agents.find({}).fetch() };
}, AdminPage);
