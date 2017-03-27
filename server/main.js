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

  // Meteor.publish('agents', function(agent_cap) {
  //   check(agent_cap, Number);
  //   if (Roles.userIsInRole( this.userId(), 'admin' )){
  //     return Agents.find({}, { limit: agent_cap })
  //   }
  // });
});


// In your server code: define a method that the client can call
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
    //run any check functions

    Agents.insert({ agent, appStatus: 'hold', admin: false, reviewed: false });
  }
});//close addAgent

Meteor.methods({
  'approveAgent': function(agent) {
    Agents.update({ _id: agent._id }, { $set: { appStatus: 'approved', reviewed: true } });
    console.log(this.userId);

    const { fname, lname, email, phone, address, city, usState, zip, personalNum, brokerageName, brokerageNum } = agent.agent

    const profile = { fname, lname, phone, address, city, usState, zip, personalNum, brokerageName, brokerageNum }
    //console.log(profile);
    try {
      const newUser = Accounts.createUser({
      email: email,
      password: phone,
      profile: profile
      });

      if(newUser){
        Roles.addUsersToRoles( newUser, [ 'agent'] );
      }
    }
      catch(error){
        return error
      }

    console.log('account created');


  }
});//close approveAgent

Meteor.methods({
  'rejectAgent': function(agent) {
    Agents.update({ _id: agent._id }, { $set: { appStatus: 'rejected', reviewed: true } });
  }
});//close rejectAgent

Meteor.methods({
  'holdAgent': function(agent) {
    Agents.update({ _id: agent._id }, { $set: { reviewed: true } });
  }
});//close holdAgent

Meteor.methods({
  'signIn': function() {
    console.log(this.userId);
    // return this.user
  }
});

Meteor.publish('agents', function(agent_cap) {
  check(agent_cap, Number);
  if (Roles.userIsInRole( this.userId, 'admin' )){
    return Agents.find({}, { limit: agent_cap })
  } else {
    this.stop();
    return
  }
});
