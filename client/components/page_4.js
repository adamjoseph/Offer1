import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button } from 'semantic-ui-react';
import { reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';


import PreviousInputs from './previous_inputs';

class Page4 extends Component {


  onSubmit(event) {
    //const { email } = this.props
    event.preventDefault();
    console.log(this.state);
    // Meteor.call('sendEmail',
    //         email
    //         'team@Offer1.com',
    //         'Thank You!',
    //         'Thank you for applying to Offer1. An administrator will review your application.');

  }

  render() {
    const { email } = this.props
    return (
      <div className='ui container'>
        <h1 className='ui header center aligned'>Final Step for Agent Application</h1>
        <PreviousInputs />
        <div>{ email }</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Button color="green" type="submit" floated="right">Finish</Button>
          <Link to="/page3">
            <Button color="red" floated="right" >Back</Button>
          </Link>
        </form>
      </div>
    );
  }
}

 FormPage4 = reduxForm({
  form: 'Application',
  destroyOnUnmount: false
})(Page4)

const selector = formValueSelector('Application');

connect(
  state => selector(state, 'email')
)(FormPage4);

// FormStateConnection = connect(
//   state => {
//     const { email } = selector(state, 'email');
//     return{ email }
//   }
// )(FormPage4)

export default FormPage4
