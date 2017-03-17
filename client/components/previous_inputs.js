import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router';





let ShowPreviousInputs = (props) => {
  const { fname, lname, phone, email, personalNum, address, city, usState, zip, brokerageName, brokerageNum } = props

    return (
      <div className='' >
        <h2 className="ui header center aligned">Confirm Info and Demographic Data</h2>
          <div className="ui three column grid">

            <div className="column">
              <div className="ui segment">
                <p>{fname} {lname}</p>
                <p>{phone}</p>
                <p>{email}</p>
                <p>{personalNum}</p>
                <Link to="/">Edit</Link>
              </div>
            </div>

            <div className="column">
              <div className="ui segment">
                <p>{address}</p>
                <p>{city}, {usState} {zip}</p>
                <p>{brokerageName}</p>
                <p>{brokerageNum}</p>
                <Link to="page/2">Edit</Link>
              </div>
            </div>


          </div>
      </div>
    );
}


ShowPreviousInputs = reduxForm({
  form: 'Application',
  destroyOnUnmount: false
})(ShowPreviousInputs)

const selector = formValueSelector('Application');

ShowPreviousInputs = connect(
  state => {
    const { fname, lname, phone, email, personalNum, address, city, usState, zip, brokerageName, brokerageNum } = selector(state, 'fname', 'lname', 'phone', 'email', 'personalNum', 'address', 'city', 'usState', 'zip', 'brokerageName', 'brokerageNum')
    return {
      fname, lname, phone, email, personalNum, address, city, usState, zip, brokerageName, brokerageNum
    }
  }
)(ShowPreviousInputs)


export default ShowPreviousInputs
