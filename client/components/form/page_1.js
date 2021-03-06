import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

//components
import renderField from '../fields/render_field';

//validation constants
const required = value => value ? undefined : 'Required';
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

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
              <Field name="fname" type="text"
                label="First Name" max="15"
                component={renderField}
                validate={required}
                />
              <Field name="lname" type="text"
                label="Last Name" max="15"
                component={renderField}
                validate={required}
                />
            </div>
            <Field name="email" type="email"
              label="Email" max="40"
              component={renderField}
              validate={[required, email]}
            />
            <Field name="phone" type="text"
              label="Cell Phone" max="20"
              component={renderField}
              validate={required}
             />
          </div>
          <div className="page-btn">
            <Link to="/register-address" >
              <button
                className={`ui right floated button ${invalid ? 'disabled' : 'green'}`}>Next</button>
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
  destroyOnUnmount: false,
  initialValues: {'soloOrTeam': 'solo', 'brokerageName': 'N/A', 'brokerageNum': 'N/A', 'sameNum': false, 'teamBuyAgents': 0, 'teamListAgents': 0, 'adminStaff': 0, 'earlyAdopter': false, 'openToNewMethods': false, 'videoTestimony': false}
})(Page1)
