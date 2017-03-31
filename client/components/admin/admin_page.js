import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Agents } from '../../../imports/collections/agents';
import { browserHistory } from 'react-router';

//import components
import AgentList from './agent_list';
import AgentInspect from './agent_inspect';
import AgentSearch from './agent_search';

//set initial values for Reactive variables
const searcher = new ReactiveVar({'reviewed': false});
const agentCount = new ReactiveVar(300);
const sortOrder = new ReactiveVar(1);

class AdminPage extends Component {
  componentDidMount() {
    //check if admin is logged in, redirect otherwise
    this.props.isAdmin ? '' : browserHistory.push('/');
  }

  componentWillUnmount(timer) {
    // stop subscription when admin leaves page
    this.props.subscription.stop();
  }

  agentFilter(data) {
    //construct search object, check for each value and add it to the object
    let searchObj = { 'reviewed': false }
    data.state ? searchObj['agent.usState'] = data.state : '';
    data.zip ? searchObj['agent.zip'] = data.zip : '';
    data.listYear ? searchObj['agent.listerTrans'] = { $gt: parseInt(data.listYear) } : '';
    data.listMonth ? searchObj['agent.listAvg'] = { $gt: parseInt(data.listMonth) } : '';

    //Update search object to trigger data update
    searcher.set(searchObj);
   }

   clearSearchFilter() {
     //reset search parameters
     searcher.set({ 'reviewed': false });
   }

   switchSortOrder() {
     sortOrder.set(
       sortOrder.get() * -1
     )
   }

   loadMore() {
     agentCount.set(
       agentCount.get() + 50
     );
   }

  render() {
    if(!this.props.agents) {
      return (
        <div className="ui active centered inline loader"></div>
      );
    }
    return (
      <div className="ui container">
        <h1 className="ui dividing header center aligned">Administration Home</h1>
        <AgentSearch
          upperSearch={this.agentFilter.bind(this)} clearData={this.clearSearchFilter.bind(this)}
          switchSortOrder={this.switchSortOrder.bind(this)}
          sortStatus={sortOrder.get()}
        />
        <div className="ui grid">
          <div className="five wide column">
            <AgentList
              agents={this.props.agents}
              loading={this.props.loading}
              moreData={this.loadMore.bind(this)}
            />
          </div>
          <div className="ten wide column">
            <AgentInspect />
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
 const agents = Agents.find(searcher.get(), {sort: {'createdAt': sortOrder.get()}}).fetch();
 const isAdmin = Roles.userIsInRole( Meteor.userId(), 'admin');

 //return subsciption data to props
 return { agents, loading, subscription, isAdmin };
}, AdminPage);
