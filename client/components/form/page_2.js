import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
//const { DOM: { input } } = React;
// import validate from '../reducers/validate';
//import components
import StateSelect from '../state_select';
import renderField from '../render_field';
import labeledField from '../labeled_field';

//import requiredInput from './validate';

const required = value => value ? undefined : 'Required';


class Page2 extends Component {

  render() {
    //console.log(this.props)
    const { invalid } = this.props
    return (
      <form>
      <div className="ui container">
        <h2 className="ui header center aligned">Real Estate Agent Application</h2>
        <div className="form-page">
          <h4 className="ui dividing header center aligned">Page Two</h4>
        <div className="ui equal width form">
          {/* <div className="fields"> */}
              <Field name="address" type="text" label="Address"
                component={labeledField}
                validate=''
                info="Please input the address that best correlates to where you primarily list homes"
               />

              <Field name="city" type="text" label="City"
                component={renderField}
                validate=''
               />
          {/* </div> */}
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
          <Field name="personalNum" type="text" label="Personal BRE # or DRE #"
            component={renderField}
            validate=''/>
          </div>

          <div className="page-btn">
            <Link to="/page3">
              <Button color="green" floated="right"
                className={invalid ? 'disabled' : ''}>Next</Button>
            </Link>
            <Link to="/">
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