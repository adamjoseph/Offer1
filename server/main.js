import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check, Match } from 'meteor/check';
//import { WebApp } from 'meteor/webapp';
//import _ from 'lodash';
//import faker from 'faker';


import  { Agents } from '../imports/collections/agents';
import { Accounts } from 'meteor/accounts-base';



Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL =
  'smtp://postmaster@sandbox7c366020d39945438730120b142279be.mailgun.org:c12d5c0229553d4263e8ddde0a4f7a7a@smtp.mailgun.org:184.173.153.200';

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
  //set up fake agent applications
  // const numberAgents = Agents.find({}).count();
  // if (numberAgents < 10) {
  //   // Generate some data...
  //   _.times(500, () => {
  //
  //     Agents.insert({
  //       "appStatus" : 'hold',
  //       "admin" : false,
  //       "reviewed" : false,
  //       "agent" : {
  //         "fname" : faker.name.firstName(),
  //         "lname" : faker.name.lastName(),
  //         "email" : faker.internet.email(),
  //         "phone" : faker.phone.phoneNumberFormat(),
  //         "address": faker.random.number(15) + " " + faker.address.streetName(),
  //         "city" : faker.address.city(),
  //         "usState" : faker.address.stateAbbr(),
  //         "zip" : faker.address.zipCode(),
  //         "personalNum" : faker.random.number(10000).toString(),
  //         "brokerageName" : faker.company.companyName(),
  //         "brokerageNum" : faker.random.number(10000).toString(),
  //         "buyerTrans" : faker.random.number(200),
  //         "listerTrans" : faker.random.number(200),
  //         "listAvg" : faker.random.number(30),
  //         "leadsPerMonth" : faker.random.number(25),
  //         "earlyAdopter" : faker.random.boolean(),
  //         "openToNewMethods" : faker.random.boolean(),
  //         "videoTestimony" : faker.random.boolean()
  //       }
  //     });
  //   });
  // }//close if statement

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

Meteor.methods({
  'addAgent': function(agent) {
    //check the data being sent in
    Agents.schema.validate(agent);

    Agents.insert({ agent, appStatus: 'hold', admin: false, reviewed: false });
  }
});//close addAgent

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
        console.log('enrollment email sent');
      }
    }//close try
      catch(error){
        return error
      }
      console.log('account created');
    }//close if statement
    else {
      throw new Meteor.Error('Unauthorized');
    }

  }
});//close approveAgent


Meteor.methods({
  'rejectAgent': function(agent) {
    if(Roles.userIsInRole( this.userId, 'admin' )) {
      Agents.update({ _id: agent._id }, { $set: { appStatus: 'rejected', reviewed: true } });
    } else {
      throw new Meteor.Error('Unauthorized');
    }
  }
});//close rejectAgent

Meteor.methods({
  'holdAgent': function(agent) {
    if(Roles.userIsInRole( this.userId, 'admin' )) {
      Agents.update({ _id: agent._id }, { $set: { reviewed: true } });
    } else {
      throw new Meteor.Error('Unauthorized');
    }
  }
});//close holdAgent

Meteor.publish('agents', function(agent_cap) {
  check(agent_cap, Number);
  if (Roles.userIsInRole( this.userId, 'admin' )){
    return Agents.find({}, { limit: agent_cap })
  } else {
    this.stop();
    return
  }
});//close publish
