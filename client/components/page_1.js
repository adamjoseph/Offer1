import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
//const { DOM: { input } } = React;
import validate from '../reducers/validate';

import StateSelect from './state_select';


class Page1 extends Component {

  render() {
    //const { fields: { fname }, errors } = this.props
    return (
      <form>
      <div className="ui form container">
        <h2 className="ui header center aligned">Real Estate Agent Application</h2>
        <h4 className="ui dividing header center aligned">Thank you for applying to be a part of the revolution of real estate. Please complete the following pages as thoroughly as possible.</h4>
        <div className="ui container">
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <Field name="fname" component='input' type="text" placeholder="First Name" />
            </div>
            <div className="field" >
              <label>Last Name</label>
              <Field name="lname" component="input" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Email</label>
              <Field name="email" component="input" type="email" placeholder="Email" />
            </div>
            <div className="field" >
              <label>Cell Phone</label>
              <Field name="phone" component="input" type="text" placeholder="CellPhone" />
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Address</label>
              <Field name="address" component="input" type="text" placeholder="Address" />
            </div>
            <div className="field" >
              <label>City</label>
              <Field name="city" component="input" type="text" placeholder="City" />
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>State</label>
              <Field name="usState" component={StateSelect} />
            </div>
            <div className="field">
              <label>Zip Code</label>
              <Field name="zip" component="input" type="number" placeholder="Zip Code" />
            </div>
          </div>

          <Link to="/page2">
          <Button color="green" floated="right" className=''>Next</Button>
          </Link>

        </div>
      </div>
      </form>
    );
  }
}



const FormPage1 = reduxForm({
  form: 'Application',
  fields: ['fname', 'lname', 'email', 'phone', 'address', 'city', 'usState', 'zip'],
  validate,
  destroyOnUnmount: false
})(Page1)

export default FormPage1
