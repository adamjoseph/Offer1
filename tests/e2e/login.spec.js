var config = require('../nightwatch.conf.BASIC.js');

module.exports = {
  'Login Test': function(browser) {
    browser
      .url('localhost:3000/')
      .waitForElementVisible('body')
      .verify.title('Offer1')
      .setValue('input[name="email"]', 'Demetrius.Greenfelder24@yahoo.com')
      .setValue('input[name="password"]', '300')
      .click('button[type="submit"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:3000/agent')
      .end();
  }

};
