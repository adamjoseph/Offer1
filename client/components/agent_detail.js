import React, { Component } from 'react';

class AgentDetail extends Component {

  approve(agent) {
    Meteor.call('approveAgent', agent);
  //   Meteor.call('sendEmail',
  //           agent.agent.email,
  //           'ApplicationTeam@Offer1.com',
  //           'Welcome!',
  //           'Your Application to Offer1 has been accepted!');
   }

  reject(agent) {
    Meteor.call('rejectAgent', agent);
    // Meteor.call('sendEmail',
    //         agent.agent.email,
    //         'ApplicationTeam@Offer1.com',
    //         'Application Update',
    //         'Your Application to Offer1 has been rejected. Please review our requirements.');

  }

  hold(agent) {
    // Meteor.call('sendEmail',
    //         agent.agent.email,
    //         'ApplicationTeam@Offer1.com',
    //         'Application Update',
    //         'Your Application to Offer1 has been held. Please review our requirements.');
  }

  render() {
  const { agent } = this.props
  const { fname, lname, email, } = this.props.agent.agent
  return (
    <div className="card" >
      <div className="content" onClick={() => this.props.clickHandler(this.props.agent.agent)}>
        {/* Place Image tag here */}
        <div className="header">
          {fname} {lname}
        </div>
        <div className="meta">
          Brokerage Name?
        </div>
        <div className="description">
          More description of the agent
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
