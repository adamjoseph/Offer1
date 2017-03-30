//import Libraries
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

//import components
import signInField from '../fields/sign_in_field';

//validation constants
const required = value => value ? undefined : 'Required';
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

class SignIn extends Component {

  onSubmit(props) {
    const { email, password } = props
    Meteor.loginWithPassword(email, password, function(error){
      if(error) {
        Bert.alert("Incorrect Username or Password", 'danger', 'growl-top-right');
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
        <h2 className="center aligned header form-head">Sign In</h2>
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="field">
            <Field name="email" type="text" label="Email"
            component={signInField} validate={[required, email]}/>
          </div>
          <div className="field">
            <Field name="password" type="password" label="Password"
              component={signInField} validate={required} />
          </div>
          <div className="field">
            <button type="submit"
              className={`ui button large fluid ${invalid ? 'disabled' : 'green'}`} >Sign In</button>
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
  fields: ['email', 'password']
})(SignIn)
