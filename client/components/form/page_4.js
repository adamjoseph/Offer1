//import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

//import components
import renderField from '../form_fields/render_field';
import smallField from '../form_fields/small_field';

//validation constants
const required = value => value ? undefined : 'Required';
const checked = value => value === true ? '' : 'Must Certify True';
const parse = value => value === undefined ? undefined : parseInt(value)



class Page4 extends Component {
  render() {
    const { invalid } = this.props
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">Help Us Get to Know You</h2>
        <div className="">
        <h4 className="ui dividing header center aligned">We want to assist in the growth of your business</h4>

      <div className="ui equal width form">
        <div className="inline fields">
            <Field name="buyerTrans" type="number"
              label="How Many Buyer transactions have you personally closed in the last 12 months?"
              component={smallField} validate={required} parse={parse}
             />
        </div>

        <div className="ui form">
          <div className="inline fields">
              <Field name="listerTrans"  type="number"
                label="How Many Listing transactions have you closed in the last 12 months?"
                 component={smallField} validate={required} parse={parse}
               />
          </div>
        </div>

        <div className="ui form">
          <div className="inline fields">
              <Field name="listAvg" type="number"
                label="How Many Listing transactions do you close on average per month?"
                component={smallField} validate={required} parse={parse}/>
          </div>
        </div>

        <div className="ui form">
          <div className="inline fields">
              <Field name="leadsPerMonth" type="number"
                 label="How many new listing leads (per month) do you think you would be able to comfortably and expertly manage?"
                 component={smallField} validate={required} parse={parse}/>
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
