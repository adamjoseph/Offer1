import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import PreviousInputs from '../previous_inputs';

const required = value => value ? undefined : 'Required';
 const checked = value => value === true ? '' : 'Must Certify True';
 const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
 const maxLength10 = maxLength(10);

class Page4 extends Component {


  render() {
    const { invalid } = this.props
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">Help Us Get to Know You</h2>
        <div className="">
        <h4 className="ui dividing header center aligned">We want to assist you in the growth of your business</h4>
      {/* <PreviousInputs /> */}

      <div className="ui equal width form">
        <div className="inline fields">
          <div className="field">
            <label>How Many Buyer transactions have you personally closed in the last 12 months?</label>
            <Field name="buyerTrans" component='input' type="number" className="small-input"/>
          </div>
        </div>

        <div className="ui form">
          <div className="inline fields">
            <div className="field">
              <label>How Many Listing transactions have you closed in the last 12 months?</label>
              <Field name="listerTrans" component='input' type="number" className="small-input"/>
            </div>
          </div>
        </div>

        <div className="ui form">
          <div className="inline fields">
            <div className="field">
              <label>How Many Listing transactions do you close on average per month?</label>
              <Field name="listAvg" component='input' type="number" className="small-input"/>
            </div>
          </div>
        </div>

        <div className="ui form">
          <div className="inline fields">
            <div className="field">
              <label>How many new listing leads (per month) do you think you would be able to comfortably and expertly manage?</label>
              <Field name="leadsPerMonth" component='input' type="number" className="small-input"/>
            </div>
          </div>
        </div>
        <div className="ui checkbox survey-question">
          <Field  name="earlyAdopter" component="input" type='checkbox'/>
          <label >Are you comfortable being an early adopter of technology?</label>
        </div>

        <div className="ui checkbox survey-question">
          <Field name="openToNewMethods" component="input" type='checkbox'/>
          <label>Are you open to trying new methods of listing if it helps you sell homes faster, at a higher price, and with greater consumer satisfaction?</label>
        </div>

        <div className="ui checkbox survey-question">
          <Field name="videoTestimony" component="input" type='checkbox'/>
          <label>If your application is accepted, and Offer1 savaes you time and money, while better serving your client, will you provide us a video testimony?</label>
        </div>

        <div className="ui checkbox survey-question">
          <Field name="certifyTrue" component="input" type='checkbox' validate={checked} />
          <label>I certify all of my above answers to be accurate and true to the best of my knowledge.</label>
        </div>

        <div className="ui checkbox survey-question">
          <Field name="provideMls" component="input" type='checkbox' validate={checked} />
          <label><strong>I agree to provide a copy of my MLS YTD production report upon request</strong></label>
        </div>
      </div>
        <Link to="/page5">
          <Button color="green" floated="right"
            className={invalid ? 'disabled' : ''}>Next</Button>
        </Link>

        <Link to="/page3">
          <Button color="red" floated="right">Back</Button>
        </Link>
      </div>
      </div>
    );
  }
}


FormPage4 = reduxForm({
  form: 'Application',
  fields: ['buyerTrans', 'listerTrans', 'listAvg', 'earlyAdopter', 'leadsPerMonth', 'openToNewMethods', 'videoTestimony', 'certifyTrue', 'provideMls'],
  destroyOnUnmount: false
})(Page4)


export default FormPage4
