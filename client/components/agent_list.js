import React, { Component } from 'react';
import { selectAgent } from '../actions/index';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { connect } from 'react-redux';

import AgentDetail from './agent_detail';

class AgentList extends Component {


  render() {
    return (
      <div className="agent-list">
      <div className="ui cards">
        {this.props.agents.map(agent =>
          <AgentDetail key={agent._id}
            agent={agent} clickHandler={this.props.selectAgent}

          />
        )}
      </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//
//   return bindActionCreators({ selectAgent: selectAgent }, dispatch)
// }

function mapDispatchToProps(dispatch) {

  const actions = {};
  const actionMap = { selectAgent: bindActionCreators(selectAgent, dispatch), dispatch};

  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(AgentList);
