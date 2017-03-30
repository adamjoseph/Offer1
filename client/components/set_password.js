import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Accounts } from 'meteor/accounts-base';

import signInField from './sign_in_field';

const required = value => value ? undefined : 'Required';

class SetPassword extends Component {
  onSubmit(props){
    const token = this.props.params.token;
    const newPassword = props.password;
    Accounts.resetPassword(token, newPassword, function(){
      Bert.alert('Password Set', 'success', 'growl-top-right');
      browserHistory.push('/');
    })
  }

  render(){
    const { handleSubmit, invalid } = this.props
    return(
      <div className="ui one column center aligned grid">
        <div className="column six wide form-holder">
          <h2 className="center aligned header form-head">
            Set Your Password
          </h2>
          <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="field">
              <Field name="password"  type="password" label="Password"
                component={signInField} validate={required}/>
            </div>
            <div className="field">
              <button type="submit"
                className={invalid ? 'ui button disabled large fluid green' : 'ui button large fluid green'} >Set Password</button>
            </div>
            </form>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'SetPassword',
  fields: ['password']
})(SetPassword)
