import React, { Component } from 'react';
import { bindActionCreators, mapStateToProps, dispatch } from 'redux';
import { connect } from 'react-redux';

import StateSelect from './state_select';

class AgentSearch extends Component {
  searchZip(value) {

  }


  render() {
    return (
      <div className="ui form">
        <div className="inline fields">
          <label>Sort Agents By: </label>
          <div className="field">
            <StateSelect />
          </div>
          <div className="field">
            <input type="text" placeholder="Zip Code" />
          </div>
          <div className="field">
            <input type="number" placeholder="Listings Per Year"/>
          </div>
          <div className="field">
            <input type="number" placeholder="Listings Per Month"/>
          </div>
        </div>
      </div>
    );
  }
}

// mapStateToProps

export default AgentSearch
