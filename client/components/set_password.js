import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Accounts } from 'meteor/accounts-base';

class SetPassword extends Component {
  onSubmit(props){
    //console.log('event hit ', this.props.params.token);
    const token = this.props.params.token;
    const newPassword = props.password;
    Accounts.resetPassword(token, newPassword, function(){
      console.log('success callback');
      browserHistory.push('/');
    })
  }

  render(){
    const { handleSubmit } = this.props
    return(
      <div className="ui one column center aligned grid">
        <div className="column six wide form-holder">
          <h2 className="center aligned header form-head">
            Set Your Password
          </h2>
          <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="field">
              <Field name="password" component="input" type="password" placeholder="Password" />
            </div>
            <div className="field">
              <button type="submit" className="ui button large fluid green" >Set Password</button>
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
