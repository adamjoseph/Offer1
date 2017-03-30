import React, { Component } from 'react';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';

import { clearAgent } from '../../actions/index';

class AgentDetail extends Component {

  approve(agent) {
    //agentClear passed down as props from agentList, sends dispatch
    this.props.agentClear();
    //changes application status, creates user, sends email
    Meteor.call('approveAgent', agent);
    Bert.alert('Agent Approved', 'success', 'growl-top-right');
   }

  reject(agent) {
    this.props.agentClear();
    Meteor.call('rejectAgent', agent);
    Meteor.call('sendEmail',
            agent.agent.email,
            'ApplicationTeam@Offer1.com',
            'Application Update',
            'Your Application to Offer1 has been rejected. Please review our requirements.');
    Bert.alert('Agent Rejected', 'danger', 'growl-top-right');
  }

  hold(agent) {
    this.props.agentClear();
    //Meteor.call('holdAgent', agent);
    // Meteor.call('sendEmail',
    //         agent.agent.email,
    //         'ApplicationTeam@Offer1.com',
    //         'Application Update',
    //         'Your Application to Offer1 has been held. Please review our requirements
    //         and update your information.');
    Bert.alert('Agent Held', 'warning', 'growl-top-right');
  }

  render() {
  const { agent } = this.props
  const { fname, lname, email, phone, listAvg } = this.props.agent.agent
  return (
    <div className="card" >
      <div className="content" onClick={() => this.props.clickHandler(this.props.agent.agent)}>
        {/* Place Image tag here */}
        <div className="header">
          {fname} {lname}
        </div>
        <div className="meta">
          {email}
        </div>
        <div className="description">
          Phone: {phone}
        </div>
      </div>
      <div className="extra content">
        <div className="ui buttons">
          <button
            className="ui basic green button"
            onClick={() => this.approve(agent)}>Approve</button>
          <button
            className="compact ui basic yellow button"
            onClick={() => this.hold(agent)}>Hold</button>
          <button
            className="ui basic red button"
            onClick={() => this.reject(agent)}>Reject</button>
        </div>
      </div>
    </div>
  );
  }
};


export default AgentDetail
