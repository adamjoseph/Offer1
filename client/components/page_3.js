import React, { Component } from 'react';
import { Form, Grid, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import StateSelect from './state_select';
import TeamSelect from './team_select';
import renderField from './render_field';
import labeledField from './labeled_field';

const labeledCheckboxField = ({ input, label, type, info, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
    <div className=''>
      <input {...input} placeholder={label} type={type}/>
      <div className="ui pointing label">
        Same as Personal BRE # ? <span>  <input type="checkbox" /></span>
      </div>
    </div>
  </div>
)


class Page3 extends Component {
  render() {
    const { invalid } = this.props
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">Company Information</h2>
        <div className="form-page">
          <h4 className="ui dividing header center aligned">Page Three</h4>
          <div className="ui equal width form">
            <div className="two fields">
              <Field name="brokerageName" type="text" label="Brokerage Name"
                component={renderField}
                validate=''
                />
              <Field name="brokerageNum" type="text" label="Office BRE # or DRE #"
                component={labeledCheckboxField}
                validate='' />
              </div>

            <div className="field">
              <label >Are you applying as a solo agent or a team?</label>
              <Field name="soloOrTeam"
                component={TeamSelect}
                validate=''/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                Number of Buyer Agents on Team
              </div>
              <Field name="teamBuyAgents" type='number'
                component='input' className="small-input"
                validate=''/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                List Agents on your team including you?
              </div>
              <Field
                name="teamListAgents" type='number'
                component='input' className="small-input"
                type='number'/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                Number of Administrative Staff
              </div>
              <Field
                name="adminStaff" type='number'
                component='input' className="small-input"
                type='number'/>
            </div>


          <Link to="/page4">
            <Button color="green" floated="right">Next</Button>
          </Link>

          <Link to="/page2">
            <Button color="red" floated="right">Back</Button>
          </Link>

        </div>
        </div>
      </div>
    );
  }
}

const FormPage3 = reduxForm({
  form: 'Application',
  fields: ['brokerageName', 'brokerageNum', 'soloOrTeam', 'teamBuyAgents', 'teamListAgents', 'adminStaff' ],
  destroyOnUnmount: false
})(Page3)


export default FormPage3
