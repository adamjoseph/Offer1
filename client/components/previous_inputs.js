import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router';





let ShowPreviousInputs = (props) => {
  const { fname, lname, phone, email, personalNum, address, city, usState, licenseState, zip, brokerageName, brokerageNum } = props

    return (
      <div className='' >
        <h2 className="ui header center aligned">Confirm Info and Demographic Data</h2>
          <div className="ui three column grid">

            <div className="column">
              <div className="ui segment">
                <p><strong>Name:</strong> {fname} {lname}</p>
                <p><strong>Address:</strong> {address}</p>
                <p>{city}, {usState} {zip}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>

                <Link to="/">Edit</Link>
              </div>
            </div>

            <div className="column">
              <div className="ui segment">
                <p><strong>License State:</strong> {licenseState}</p>
                <p><strong>Personal DRE #:</strong> {personalNum}</p>
                <p><strong>Brokerage Name:</strong> {brokerageName}</p>
                <p><strong>Brokerage DRE #:</strong> {brokerageNum}</p>
                <p><br/></p>
                <Link to="/page2">Edit</Link>
              </div>
            </div>

            <div className="column">
              <div className="ui segment">
                {/* <div className="profile-pic">
                  <Image src="../../Default_Avatar.jpg" size="small" shape="rounded" />
                </div>
                <div className="add-pic">
                  <i className="big add circle icon"></i>
                  Profile Picture
                </div> */}
                <div className="ui card">
                  <div className="">
                    <Image className="prof-pic" src="../../Default_Avatar.jpg" />
                  </div>
                  <div className="content">
                    <button className="small ui button">
                      Add Photo
                    </button>
                  </div>
                </div>
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
    const { fname, lname, phone, email, personalNum, address, city, usState, licenseState, zip, brokerageName, brokerageNum } = selector(state, 'fname', 'lname', 'phone', 'email', 'personalNum', 'address', 'city', 'usState', 'liceseState', 'zip', 'brokerageName', 'brokerageNum')
    return {
      fname, lname, phone, email, personalNum, address, city, usState, licenseState, zip, brokerageName, brokerageNum
    }
  }
)(ShowPreviousInputs)


export default ShowPreviousInputs
