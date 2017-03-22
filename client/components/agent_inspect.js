import React, { Component } from 'react';
import { connect } from 'react-redux';

class AgentInspect extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="agent-inspect">
        Agent Details go here
        <div></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedAgent: state.selectedAgent
  };
}

export default connect(mapStateToProps)(AgentInspect);
