import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import SignIn from '../components/landing_pages/sign_in';
import FormPage1 from '../components/form/page_1';
import FormPage2 from '../components/form/page_2';
import FormPage3 from '../components/form/page_3';
import FormPage4 from '../components/form/page_4';
import FormPage5 from '../components/form/page_5';
import ThankYou from '../components/landing_pages/thank_you';
import AdminPage from '../components/admin/admin_page';
import AgentHome from '../components/agent/agent_home';
import SetPassword from '../components/landing_pages/set_password';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={SignIn} />
    <Route path="register-basic-info" component={FormPage1} />
    <Route path="register-address" component={FormPage2} />
    <Route path="register-company-info" component={FormPage3} />
    <Route path="register-survey" component={FormPage4} />
    <Route path="register-confirm" component={FormPage5} />
    <Route path="/thankyou" component={ThankYou} />
    <Route path="/admin" component={AdminPage} />
    <Route path="/agent" component={AgentHome} />
    <Route path="enroll-account/:token" component={SetPassword} />
  </Route>
);
