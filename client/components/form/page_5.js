import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button } from 'semantic-ui-react';
import { reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';
import { dispatch } from 'redux';


import PreviousInputs from '../previous_inputs';

const selector = formValueSelector('Application');

class Page5 extends Component {

  onSubmit(props) {
    const agentEmail = props.email;
      Meteor.call('addAgent', props, function(error){
        if(error){
          //console.log(error);
          Bert.alert( error + error.reason, 'danger' );

        } else {
          //clear the form inputs
          this.props.dispatch(reset('Application'));
          Meteor.call('sendEmail',
                  agentEmail,
                  'ApplicationTeam@Offer1.com',
                  'Thank You!',
                  'Thank you for applying to Offer1. An administrator will review your application.');
          browserHistory.push('/thankyou');
        }
      });
  }//close onSubmit

  render() {
    const { handleSubmit, pristine } = this.props
    //console.log(this.props)
    return (
      <div className='ui container'>
        <h1 className='ui header center aligned'>Final Step for Agent Application</h1>
        <PreviousInputs />
        <h3 className='ui header center aligned'>Agents selected to participate in a rollout will be grandfathered into our lowest pricing</h3>
        <h4 className='ui header center aligned'>If your application is accepted you will receive the following</h4>
        <div className="ui three column grid">
          <div className="column">
            <div className="ui segment">
            <ul className='ui list'>
              <li>Seller Registration</li>
              <li>List Presentation Materials</li>
              <li>Electronic Signatures</li>
              <li>Property Page</li>
              <li>Property View Counter</li>
              <li>Offer Submission</li>
              <li>Seller Notification</li>
              <li>Email Offer Notification</li>
              <li>Offer comparison tool</li>
              <li>Offer Validation</li>
              <br/>
              <br/>
            </ul>
          </div>
          </div>
          <div className="column">
            <div className="ui segment">
            <ul className='ui list'>
              <li>Contract generator</li>
              <li>Buyer profile creation</li>
              <li>Seller Document storage</li>
              <li>Seller estimated HUD</li>
              <li>Seller Title PR</li>
              <li>Seller Video Series</li>
              <li>Agent public profile</li>
              <li>Offer Presentation tool</li>
              <li>Buyer Agent Organizer</li>
              <li>Offer time stamp</li>
              <li>Listing Process</li>
              <li>Buyer demand generator</li>
            </ul>
          </div>
          </div>
          <div className="column">
            <div className="ui segment">
            <ul className='ui list'>
              <li>UNLIMITED MONTHLY TRANSACTIONS</li>
              <li>Transaction History</li>
              <li>Client History and Lookup</li>
              <li>Seller Leads</li>
              <li>Buyer Leads</li>
              <li>Private FB Page Access</li>
              <li>Market Data Access</li>
              <li>Eligibility to Platinum and Ambassador programs</li>
              <li>Team data history</li>
              <br/>
            </ul>
          </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Button color="green" type="submit" floated="right"
            className={pristine ? 'disabled' : ''}>Finish</Button>
          <Link to="/page4">
            <Button color="red" floated="right" className="page-btn">Back</Button>
          </Link>
        </form>
      </div>
    );
  }
}


FormPage5 = reduxForm({
  form: 'Application',
  destroyOnUnmount: false
})(Page5)

export default Page5Connect = connect(
  state => {
    //const  email  = selector(state, 'email');
    const  values  = selector(state, 'values');
    return { values }
  }
)(FormPage5)

// className={invalid ? 'disabled' : ''}
