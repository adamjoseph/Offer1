//import libraries/function
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

//import components
import StateSelect from '../fields/state_select';
import renderField from '../fields/render_field';
import labeledField from '../fields/labeled_field';


//Validation constants
const required = value => value ? undefined : 'Required';


class Page2 extends Component {

  render() {
    const { invalid } = this.props
    return (
      <form>
      <div className="ui container">
        <h2 className="ui header center aligned">Real Estate Agent Application</h2>
        <div className="form-page">
          <h4 className="ui dividing header center aligned">Page Two</h4>
        <div className="ui equal width form">
            <Field name="address" type="text"
              label="Address" max="50"
              component={labeledField}
              validate={required}
              info="Please input the address that best correlates to where you primarily list homes"
             />

            <Field name="city" type="text"
              label="City" max="30"
              component={renderField}
              validate={required}
             />
          <div className="two fields">
            <div className="field">
              <label>State</label>
              <Field name="usState"
                component={StateSelect}
                validate={required}
               />
            </div>
              <Field name="zip" type="text"
                label="Zip" max="15"
                component={renderField}
                validate={required}
              />
          </div>
          <Field name="personalNum" type="text"
            label="Personal BRE # or DRE #" max="20"
            component={renderField}
            validate={required}/>
          </div>

          <div className="page-btn">
            <Link to="/page3">
              <button className={`ui right floated button
                ${invalid ? 'disabled' : 'green'}`}>Next</button>
            </Link>
            <Link to="/page1">
              <Button color="red" floated="right">Back</Button>
            </Link>
          </div>
        </div>
      </div>
      </form>
    );
  }
}



const FormPage2 = reduxForm({
  form: 'Application',
  fields: ['address', 'city', 'usState', 'zip', 'personalNum'],
  destroyOnUnmount: false
})(Page2)

export default FormPage2
