import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
//import { Meteor as meteor } from 'meteor/meteor';

import signInField from './sign_in_field';

const required = value => value ? undefined : 'Required';

class SignIn extends Component {

  onSubmit(props) {
    const { email, password } = props
    Meteor.loginWithPassword(email, password, function(error){
      if(error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else if(Roles.userIsInRole( Meteor.userId(), 'admin' )){
        browserHistory.push('/admin');
      } else if(Roles.userIsInRole( Meteor.userId(), 'agent' )){
        browserHistory.push('/agent');
      }
    });

  }
render() {
  const { handleSubmit, invalid } = this.props;

  return(
    <div className="ui one column center aligned grid">
      <div className="column six wide form-holder">
        <h2 className="center aligned header form-head"
          >Sign in or <Link to="/page1">Register</Link>
        </h2>
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="field">
            <Field name="email" type="text" label="Email"
            component={signInField} validate={required}/>
          </div>
          <div className="field">
            <Field name="password" type="password" label="Password"
              component={signInField} validate={required} />
          </div>
          <div className="field">
            <button type="submit"
              className={invalid ? 'ui button disabled large fluid green' : 'ui button large fluid green'} >Sign In</button>
          </div>
          <div className="inline field">


            </div>
          </form>
        </div>
      </div>
  );
  }
}

export default reduxForm({
  form: 'SignIn',
  fields: ['email', 'password'],
})(SignIn)
