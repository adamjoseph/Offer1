import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer, getMeteorData } from 'meteor/react-meteor-data';
import { Agents } from '../../../imports/collections/agents';
import { selectAgent, getAgents } from '../../actions/index';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { browserHistory } from 'react-router';
//import { connect } from 'react-redux';


//import components
import AgentList from './agent_list';
//import AgentDetail from './agent_detail';
import AgentInspect from './agent_inspect';
import AgentSearch from './agent_search';

const searcher = new ReactiveVar({'reviewed': false});

const agentCount = new ReactiveVar(50);


class AdminPage extends Component {
  componentWillMount() {
    Roles.userIsInRole( Meteor.userId(), 'admin' ) ? ''
    :
    browserHistory.push('/');
  }

  componentWillUnmount() {
    console.log('sub stopped');
    this.props.subscription.stop();
  }

  agentFilter(data) {
    //construct search object, check for each value and add it to the object
    let searchObj = { 'reviewed': false }
    data.state ? searchObj['agent.usState'] = data.state : '';
    data.zip ? searchObj['agent.zip'] = data.zip : '';
    data.listYear ? searchObj['agent.listerTrans'] = { $gt: parseInt(data.listYear) } : '';
    data.listMonth ? searchObj['agent.listAvg'] = { $gt: parseInt(data.listMonth) } : '';
    //console.log(searchObj)
    //Update search object to trigger data update
    searcher.set(searchObj);
   }

   clearSearchFilter() {
     //reset search parameters
     searcher.set({ 'reviewed': false });
   }

   loadMore() {
     agentCount.set(
       agentCount.get() + 50
     );
   }

  render() {
    if(!this.props.agents) {
      return (
        <div class="ui active centered inline loader"></div>
      );
    }
    return (
      <div className="ui container">
        <h1 className="ui dividing header center aligned">Adminstration Home</h1>
        <AgentSearch
          upperSearch={this.agentFilter.bind(this)} clearData={this.clearSearchFilter.bind(this)}

        />
        <div className="ui grid">
          <div className="ten wide column">
            <AgentInspect />
          </div>
          <div className="five wide column">
            <AgentList
              agents={this.props.agents}
              loading={this.props.loading}
              moreData={this.loadMore.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
 //set up subscription
 const subscription = Meteor.subscribe('agents', agentCount.get());
 const loading = !subscription.ready();
 const agents = Agents.find(searcher.get()).fetch();
 //const stopSub = subscription.stop();
 return { agents, loading, subscription };
}, AdminPage);

// function mapStateToProps(state) {
//   return { agents: state.agents }
// }
//
// function mapDispatchToProps(dispatch) {
//
//   const actions = {};
//   const actionMap = {
//     getAgents: bindActionCreators(getAgents, dispatch), dispatch};
//
//   return actionMap;
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MeteorContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
