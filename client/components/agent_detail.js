import React, { Component } from 'react';

class AgentDetail extends Component {

  render() {
  const { fname, lname, email, } = this.props.agent.agent
  return (
    <div className="card" onClick={() => this.props.clickHandler(this.props.agent.agent)}>
      <div className="content">
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
          <button className="ui basic green button">Approve</button>
          <button className="compact ui basic yellow button">Hold</button>
          <button className="ui basic red button">Reject</button>
        </div>
      </div>
    </div>
  );
  }
};

export default AgentDetail
