//import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

//import components
import PhotoDrop from './photo_drop';


let ShowPreviousInputs = (props) => {
  const { fname, lname, phone, email, personalNum, address, city, usState, licenseState, zip, brokerageName, brokerageNum } = props

    return (
      <div className='' >
        <h2 className="ui header center aligned">Confirm Info</h2>
          <div className="ui stackable three column grid">

            <div className="column">
              <div className="ui segment">
                <p><strong>Name:</strong> {fname} {lname}</p>
                <p><strong>Address:</strong> {address}</p>
                <p>{city}, {usState} {zip}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <Link to="/page1">Edit</Link>
              </div>
            </div>

            <div className="column">
              <div className="ui segment page5-top-segment">
                <p><strong>License State:</strong> {usState}</p>
                <p><strong>Personal DRE #:</strong> {personalNum}</p>
                <p><strong>Brokerage Name:</strong> {brokerageName}</p>
                <p><strong>Brokerage DRE #:</strong> {brokerageNum}</p>
                <Link to="/page2">Edit</Link>
              </div>
            </div>
            <PhotoDrop />
          </div>
      </div>
    );
}


ShowPreviousInputs = reduxForm({
  form: 'Application',
  destroyOnUnmount: false
})(ShowPreviousInputs)

const selector = formValueSelector('Application');

//connect with state to get previous inputs
ShowPreviousInputs = connect(
  state => {
    const { fname, lname, phone, email, personalNum, address, city, usState, licenseState, zip, brokerageName, brokerageNum } = selector(state, 'fname', 'lname', 'phone', 'email', 'personalNum', 'address', 'city', 'usState', 'liceseState', 'zip', 'brokerageName', 'brokerageNum')
    return {
      fname, lname, phone, email, personalNum, address, city, usState, licenseState, zip, brokerageName, brokerageNum
    }
  }
)(ShowPreviousInputs)


export default ShowPreviousInputs
