import React, { Component } from 'react';
import { connect } from 'react-redux';

const AgentInspect = (props) => {

  if (!props.selectedAgent){
    return (
      <div>
      <h4 className="ui header center aligned">Agent Details Appear Here</h4>
    </div>
    );
  }
  else {
    const { address, brokerageName, brokerageNum, buyerTrans, city, earlyAdopter, email, fname, leadsPerMonth, licenseState, listAvg, listerTrans, lname, openToNewMethods, personalNum, phone, usState, videoTestimony, zip } = props.selectedAgent

    return (
      <div className="agent-inspect-left">
        <div className="ui fluid card">
          <div className="content">
            <div className="agent-inspect-left">
              <h4 className="ui header">Personal Details:</h4>
              <p><strong>Name:</strong> {fname} {lname}</p>
              <p><strong>Address:</strong> {address}</p>
              <p>{city}, {usState} {zip}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Early Adopter of Technology?</strong> {earlyAdopter ? 'Yes' : 'No'}</p>
              <p><strong>Open to Trying New Methods?</strong> {openToNewMethods ? 'Yes' : 'No'}</p>
              <p><strong>Willing to Provide Video Testimony?</strong> {videoTestimony ? 'Yes' : 'No'}</p>
            </div>

            <div className="agent-inspect-right">
              <h4 className="ui header">Business Details:</h4>
              <p><strong>License State:</strong> {usState}</p>
              <p><strong>Personal DRE #:</strong> {personalNum}</p>
              <p><strong>Brokerage Name:</strong> {brokerageName}</p>
              <p><strong>Brokerage DRE #:</strong> {brokerageNum}</p>
              <p><strong>Buyer Transactions in 12 Months:</strong> {buyerTrans}</p>
              <p><strong>Listing Transactions in 12 Months:</strong> {listerTrans}</p>
              <p><strong>Listing Transactions/Month:</strong> {listAvg}</p>
              <p><strong>Number of New Listing Leads Comfortable with:</strong> {leadsPerMonth}</p>
            </div>
          </div>
        </div>
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
