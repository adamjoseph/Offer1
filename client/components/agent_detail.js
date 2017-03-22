import React from 'react';

const AgentDetail = ({ agent }) => {
  const { fname, lname, email, } = agent.agent;

  return (
    <div className="card">
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
};

export default AgentDetail
