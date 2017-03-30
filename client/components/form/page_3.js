import React, { Component } from 'react';
import { Form, Grid, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import StateSelect from '../form_fields/state_select';
import TeamSelect from '../form_fields/team_select';
import renderField from '../form_fields/render_field';
import labeledField from '../form_fields/labeled_field';

const selector = formValueSelector('Application');

//Validation constants
const required = value => value ? undefined : 'Required';
const parse = value => value === undefined ? undefined : parseInt(value)


class Page3 extends Component {
  render() {
    const { invalid, solo } = this.props
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">Company Information</h2>
        <div className="form-page">
          <h4 className="ui dividing header center aligned">Page Three</h4>
          <div className="ui equal width form">
            <div className="two fields">
              <Field name="brokerageName" type="text"
                label="Brokerage Name" max="40"
                component={renderField}
                validate=''
                />
              <Field name="brokerageNum" type="text"
                label="Office BRE # or DRE #" max="20"
                component={renderField}
                validate='' />
              </div>
              <div className="ui checkbox extra-check">
                <Field  name="sameNum" component="input" type='checkbox'/>
                <label >Same as personal BRE # ?</label>
              </div>

            <div className="field">
              <label >Are you applying as a solo agent or a team?</label>
              <Field name="soloOrTeam"
                component={TeamSelect}
                validate=''/>
            </div>
            {/* start conditional inputs */}
            {solo === 'team' ?<div>
            <div className="inline field" >
              <div className="ui right pointing label">
                Number of Buyer Agents on Team
              </div>
              <Field name="teamBuyAgents" type='number'
                component='input' className="small-input"
                validate='' parse={parse}/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                List Agents on your team including you
              </div>
              <Field
                name="teamListAgents" type='number'
                component='input' className="small-input"
                type='number' parse={parse}/>
            </div>

            <div className="inline field" >
              <div className="ui right pointing label">
                Number of Administrative Staff
              </div>
              <Field
                name="adminStaff" type='number'
                component='input' className="small-input"
                type='number' parse={parse}/>
            </div>
          </div>
            : <div></div>}
          {/* end conditional inputs */}
          <Link to="/page4">
            <Button color="green" floated="right"
              className={invalid ? 'disabled' : ''}>Next</Button>
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
  fields: ['brokerageName', 'brokerageNum', 'sameNum', 'soloOrTeam', 'teamBuyAgents', 'teamListAgents', 'adminStaff' ],
  destroyOnUnmount: false
})(Page3)


export default Page3Connect = connect(
  state => {
    const  solo  = selector(state, 'soloOrTeam');
    return { solo }
  }
)(FormPage3)
