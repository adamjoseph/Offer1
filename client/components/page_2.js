import React, { Component } from 'react';
import { Form, Grid, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import StateSelect from './state_select';
import TeamSelect from './team_select';
import renderField from './render_field';


class Page2 extends Component {
  render() {
    const { invalid } = this.props
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">License Information</h2>
          <div className="ui form">
            <div className="two fields">
              <div className="field">
                <label>License State</label>
                <Field
                  name="licenseState"
                  component={StateSelect}
                  validate='' />
              </div>
                <Field name="personalNum" type="text" label="Personal BRE # or DRE #"
                  component={renderField}
                  validate=''/>
            </div>

            <div className="two fields">
                <Field name="brokerageName" type="text" label="Brokerage Name"
                  component={renderField}
                  validate=''
                  />
                <Field name="brokerageNum" type="text" label="Office BRE # or DRE #"
                  component={renderField}
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
                component='input'
                validate=''/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                List Agents on your team including you?
              </div>
              <Field
                name="teamListAgents"
                component='input'
                type='number'/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                Number of Administrative Staff
              </div>
              <Field
                name="adminStaff"
                component='input'
                type='number'/>
            </div>


          <Link to="/page3">
          <Button color="green" floated="right">Next</Button>
          </Link>

          <Link to="/">
          <Button color="red" floated="right">Back</Button>
          </Link>

        </div>
      </div>
    );
  }
}

const FormPage2 = reduxForm({
  form: 'Application',
  fields: ['liceseState', 'personalNum', 'brokerageName', 'brokerageNum', 'soloOrTeam', 'teamBuyAgents', 'teamListAgents', 'adminStaff' ],
  destroyOnUnmount: false
})(Page2)


export default FormPage2
