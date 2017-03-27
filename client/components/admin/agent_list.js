import React, { Component } from 'react';
import { selectAgent, clearAgent } from '../../actions/index';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { connect } from 'react-redux';

import AgentDetail from './agent_detail';

class AgentList extends Component {

  getMoreAgents() {
    //call function on admin page to increase subscription count
    this.props.moreData();

  }

  render() {
    if(this.props.loading) {
      return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      );
    }
    return (
      <div className="agent-list">
      <div className="ui cards">

        {this.props.agents.map(agent =>
          <AgentDetail key={agent._id}
            agent={agent} clickHandler={this.props.selectAgent}
            agentClear={this.props.clearAgent}

          />
        )}
        <button type="button" className="ui button agent-list-btn"
          onClick={() => this.getMoreAgents()}>More</button>
      </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { agents: state.agents };
}

function mapDispatchToProps(dispatch) {

  const actions = {};
  const actionMap = {
    selectAgent: bindActionCreators(selectAgent, dispatch),
    clearAgent: bindActionCreators(clearAgent, dispatch),
    dispatch};

  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(AgentList);
