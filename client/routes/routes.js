import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import SignIn from '../components/sign_in';
import FormPage1 from '../components/form/page_1';
import FormPage2 from '../components/form/page_2';
import FormPage3 from '../components/form/page_3';
import FormPage4 from '../components/form/page_4';
import FormPage5 from '../components/form/page_5';
import ThankYou from '../components/thank_you';
import AdminPage from '../components/admin/admin_page';
import AgentHome from '../components/agent_home';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={SignIn} />
    <Route path="page1" component={FormPage1} />
    <Route path="page2" component={FormPage2} />
    <Route path="page3" component={FormPage3} />
    <Route path="page4" component={FormPage4} />
    <Route path="page5" component={FormPage5} />
    <Route path="/thankyou" component={ThankYou} />
    <Route path="/admin" component={AdminPage} />
    <Route path="/agent" component={AgentHome} />
  </Route>
);
