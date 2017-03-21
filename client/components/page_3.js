import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import PreviousInputs from './previous_inputs';

class Page3 extends Component {


  render() {
    return (
      <div className="ui container">
      <PreviousInputs />
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <label>How Many Buyer transactions have you personally closed in the last 12 months?</label>
            <Field name="buyerTrans" component='input' type="number"/>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <label>How Many Listing transactions have you closed in the last 12 months?</label>
            <Field name="listerTrans" component='input' type="number"/>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <label>How Many Listing transactions do you close on average per month?</label>
            <Field name="listAvg" component='input' type="number"/>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <label>How many new listing leads (per month) do you think you would be able to comfortably and expertly manage?</label>
            <Field name="leadsPerMonth" component='input' type="number"/>
          </div>
        </div>
      </div>

      <div className="">
        <div className="field">
          <div className="ui checkbox">
            <label>Are you comfortable being an early adopter of technology?</label>
            <Field name="earlyAdopter" component="input" type='checkbox'/>
          </div>
        </div>
      </div>

      <div >
        <label>Are you open to trying new methods of listing if it helps you sell homes faster, at a higher price, and with greater consumer satisfaction?</label>
        <Field name="openToNewMethods" component="input" type='checkbox'/>
      </div>

      <div >
        <label>If your application is accepted, and Offer1 savaes you time and money, while better serving your client, will you provide us a video testimony?</label>
        <Field name="videoTestimony" component="input" type='checkbox'/>
      </div>

      <div >
        <label>I certify all of my above answers to be accurate and true to the best of my knowledge.</label>
        <Field name="certifyTrue" component="input" type='checkbox'/>
      </div>

      <Link to="/page4">
      <Button color="green" floated="right">Next</Button>
      </Link>

      <Link to="/page2">
      <Button color="red" floated="right">Back</Button>
      </Link>

      </div>
    );
  }
}


FormPage3 = reduxForm({
  form: 'Application',
  fields: ['buyerTrans', 'listerTrans', 'listAvg', 'earlyAdopter', 'leadsPerMonth', 'openToNewMethods', 'videoTestimony', 'certifyTrue'],
  destroyOnUnmount: false
})(Page3)


export default FormPage3
