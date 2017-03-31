import React, { Component } from 'react';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { connect } from 'react-redux';
import { searchAgent, clearAgent } from '../../actions/index';
import { Field, reduxForm, reset } from 'redux-form';

import StateSelect from '../fields/state_select';

class AgentSearch extends Component {
  onSubmit(props) {
    //trigger updated search params on admin page
    this.props.upperSearch(props);
    //clear the form inputs
    this.props.dispatch(reset('AgentSearch'));
    //clear any agent in the agent detail component
    this.props.dispatch(clearAgent());

  }

  clearSearchComponent() {
    //clear the form inputs
    this.props.dispatch(reset('AgentSearch'));
    //clear search params on upper component (admin page)
    this.props.clearData();
    //clear any agent in the agent detail component
    this.props.dispatch(clearAgent());
  }

  switchSortOrder() {
    this.props.switchSortOrder();
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form className="ui fluid form search-bar" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="inline fields">
          <label>Sort Agents By: </label>
          <div className="field">
            <Field name="state" component={StateSelect}
            />
          </div>
          <div className="field">
            <Field name="zip" component="input" type="text" placeholder="Zip Code" ref="zipInput"/>
          </div>
          <div className="field">
            <Field name="listYear" component="input" type="number" placeholder="Listings Per Year"/>
          </div>
          <div className="field">
            <Field name="listMonth" component="input" type="number" placeholder="Listings Per Month"/>
          </div>
          <div className="field">
            <button type="submit" className="ui blue button">Search</button>
          </div>
          <div className="field">
            <button type="button" className="ui blue button"
              onClick={() => this.switchSortOrder()}>
              {this.props.sortStatus === 1 ? "Newest" : "Oldest"}
            </button>
          </div>
          <div className="field">
            <button type="button" className="ui blue button"
              onClick={() => this.clearSearchComponent()}>Clear</button>
          </div>
        </div>
      </form>
    );
  }
}

export default  reduxForm({
 form: 'AgentSearch',
 fields: ['state', 'zip', 'listYear', 'listMonth']
})(AgentSearch);
