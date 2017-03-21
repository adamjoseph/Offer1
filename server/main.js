import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check, Match } from 'meteor/check';
import { Mongo } from 'meteor/mongo';

//import Agents from '../imports/collections/agents';

Agents = new Mongo.Collection('agents');
Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL =
  'smtp://postmaster@sandbox7c366020d39945438730120b142279be.mailgun.org:c12d5c0229553d4263e8ddde0a4f7a7a@smtp.mailgun.org:184.173.153.200';

  // Meteor.publish('Agents', function() {
  //   return Agents.find({});
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

    console.log(agent);
    Agents.insert({ agent });
  }
});
