import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check, Match } from 'meteor/check';

import mailUrl from './config';

import  { Agents } from '../imports/collections/agents';
import { Images } from '../imports/collections/images';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = mailUrl.mailUrl;

  //send daily email to admin w/number of applicants
  // Meteor.setInterval(() => {
  //   const applications = Agents.find({}).count();
  //   Email.send({
  //     to: 'amjoseph93@gmail.com',
  //     from: 'Offer1Server@Offer1.com',
  //     subject: 'Applications Update',
  //     text: 'Number of Applicants in Database: ' + applications
  //   });
  // }, 86400000)

  //set up email template
  Accounts.urls.enrollAccount = function(token) {
    return Meteor.absoluteUrl('enroll-account/' + token);
  };
  Accounts.emailTemplates.from = "Administrator <Team@Offer1.com>";
  Accounts.emailTemplates.enrollAccount.subject = function(user) {
    return (
      'Congratulations ' + user.profile.fname + '! ' + 'Your Application has been Approved.'
    );
  };
  Accounts.emailTemplates.enrollAccount.text = function(user, url) {
    return (
      "To set the password of your account, click the link below:\n\n" + url
    );
  }
});//close Startup

//set up schema for agent application submission
Agents.schema = new SimpleSchema({
  fname: {type: String},
  lname: {type: String},
  email: {type: String},
  phone: {type: String},
  address: {type: String},
  city: {type: String},
  usState: {type: String},
  zip: {type: String},
  personalNum: {type: String},
  brokerageName: {type: String},
  brokerageNum: {type: String},
  sameNum: {type: Boolean},
  soloOrTeam: {type: String},
  teamBuyAgents: {type: Number},
  teamListAgents: {type: Number},
  adminStaff: {type: Number},
  buyerTrans: {type: Number},
  listerTrans: {type: Number},
  listAvg: {type: Number},
  leadsPerMonth: {type: Number},
  earlyAdopter: {type: Boolean},
  openToNewMethods: {type: Boolean},
  videoTestimony: {type: Boolean},
  certifyTrue: {type: Boolean},
  provideMls: {type: Boolean}
});

Meteor.methods({
  'sendEmail': function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

//checks schema, and adds agent application to database
Meteor.methods({
  'addAgent': function(agent) {
    //check the data being sent in
    Agents.schema.validate(agent);
    //if schema check passes, insert agent application to collection
    Agents.insert({ agent, appStatus: 'hold', createdAt: new Date(), reviewed: false });
  }
});

//Updates agent application, creates user account, adds 'agent' role to account,
//sends enrollment email
Meteor.methods({
  'approveAgent': function(agent) {
    if(Roles.userIsInRole( this.userId, 'admin' )){
    Agents.update({ _id: agent._id }, { $set: { appStatus: 'approved', reviewed: true } });

    //pull agent details
    const { fname, lname, email, phone, address, city, usState, zip, personalNum, brokerageName, brokerageNum } = agent.agent
    //construct profile object
    const profile = { fname, lname, phone, address, city, usState, zip, personalNum, brokerageName, brokerageNum }
    try {
      const newUser = Accounts.createUser({
      email: email,
      password: Math.random().toString(36).slice(-5),
      profile: profile
      });

      if(newUser){
        Roles.addUsersToRoles( newUser, [ 'agent'] );
        Accounts.sendEnrollmentEmail(newUser, email);
      }
    }//close try
      catch(error){
        return error
      }
    }//close if statement
    else {
      throw new Meteor.Error('Unauthorized');
    }
  }
});

//Update agent application with rejected and reviewed
Meteor.methods({
  'rejectAgent': function(agent) {
    if(Roles.userIsInRole( this.userId, 'admin' )) {
      Agents.update({ _id: agent._id }, { $set: { appStatus: 'rejected', reviewed: true } });
    } else {
      throw new Meteor.Error('Unauthorized');
    }
  }
});

//update agent application to reviewed, status still equals 'hold'
Meteor.methods({
  'holdAgent': function(agent) {
    if(Roles.userIsInRole( this.userId, 'admin' )) {
      Agents.update({ _id: agent._id }, { $set: { reviewed: true } });
    } else {
      throw new Meteor.Error('Unauthorized');
    }
  }
});

//Publish agent data to Admin page, check if Admin is logged in
Meteor.publish('agents', function(agent_cap) {
  check(agent_cap, Number);
  if (Roles.userIsInRole( this.userId, 'admin' )){
    return Agents.find({}, { limit: agent_cap })
  } else {
    this.stop();
    return
  }
});

Images.allow({
    'insert': function() {
        // add custom authentication code here
        return true;
    },
    'update': function() {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        // add custom authentication code here
        return true;
    },
    download: function(userId, fileObj) {
        return true
    }
});
