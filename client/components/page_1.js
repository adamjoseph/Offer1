import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

import renderField from './render_field';

const required = value => value ? undefined : 'Required';
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

class Page1 extends Component {
  render() {
    const { invalid } = this.props
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">Real Estate Agent Application</h2>
        <h4 className="ui dividing header center aligned">Thank you for applying to be a part of the revolution of real estate. Please complete the following pages as thoroughly as possible.</h4>
        <div className="form-page">
          <div className="ui equal width form">
            <div className="fields">
              <Field name="fname" type="text" label="First Name"
                component={renderField}
                validate=""
                />
              <Field name="lname" type="text" label="Last Name"
                component={renderField}
                validate=""
                />
            </div>
            <Field name="email" type="email" label="Email"
              component={renderField}
              validate=""
            />
            <Field name="phone" type="text" label="Cell Phone"
              component={renderField}
              validate=""
             />
          </div>
          <div className="page-btn">
            <Link to="/page2" >
              <Button color="green" floated="right"
                className={invalid ? 'disabled' : ''}>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Application',
  fields: ['fname', 'lname', 'email', 'phone'],
  destroyOnUnmount: false
})(Page1)
