import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
//import { Meteor as meteor } from 'meteor/meteor';


class SignIn extends Component {
  onSubmit(props) {
    const { email, password } = props
    Meteor.loginWithPassword(email, password, function(error){
      if(error) {
        alert(error.reason);
      } else if(Roles.userIsInRole( Meteor.userId(), 'admin' )){
        browserHistory.push('/admin');
      } else if(Roles.userIsInRole( Meteor.userId(), 'agent' )){
        browserHistory.push('/agent');
      }
    });

  }

  signInResponse() {
    console.log('success hit');
    //Meteor.Call('signIn');
    console.log(Meteor.user());
  }

render() {
  const { handleSubmit } = this.props;

  return(
    <div className="ui one column center aligned grid">
      <div className="column six wide form-holder">
        <h2 className="center aligned header form-head"
          >Sign in or <Link to="/page1">Register</Link>
        </h2>
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="field">
            <Field name="email" component="input" type="text" placeholder="Email" />
          </div>
          <div className="field">
            <Field name="password" component="input" type="password" placeholder="Password" />
          </div>
          <div className="field">
            <button type="submit" className="ui button large fluid green" >Sign In</button>
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
