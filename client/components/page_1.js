import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
//const { DOM: { input } } = React;
// import validate from '../reducers/validate';
//import components
import StateSelect from './state_select';
import renderField from './render_field';

const required = value => value ? undefined : 'Required';
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined




class Page1 extends Component {

  render() {
    //console.log(this.props)
    const { invalid } = this.props
    return (
      <form>
      <div className="ui form container">
        <h2 className="ui header center aligned">Real Estate Agent Application</h2>
        <h4 className="ui dividing header center aligned">Thank you for applying to be a part of the revolution of real estate. Please complete the following pages as thoroughly as possible.</h4>
        <div className="ui container">
          <div className="two fields">
              <Field name="fname" type="text" label="First Name"
                component={renderField}
                validate={required}
                />
              <Field name="lname" type="text" label="Last Name"
                component={renderField}
                validate={required}
                />
          </div>
          <div className="two fields">
              <Field name="email" type="email" label="Email"
                component={renderField}
                validate=''
              />
              <Field name="phone" type="text" label="Cell Phone"
                component={renderField}
                validate=''
               />
          </div>
          <div className="two fields">
              <Field name="address" type="text" label="Address"
                component={renderField}
                validate=''
               />
              <Field name="city" type="text" label="City"
                component={renderField}
                validate=''
               />
          </div>
          <div className="two fields">
            <div className="field">
              <label>State</label>
              <Field name="usState"
                component={StateSelect}
                validate=''
               />
            </div>
              <Field name="zip" type="number" label="Zip"
                component={renderField}
                validate=''
              />
          </div>

          <Link to="/page2">
          <Button color="green" floated="right" className={invalid ? 'disabled' : ''}>Next</Button>
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
  destroyOnUnmount: false
})(Page1)

export default FormPage1
