import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import FormPage1 from '../components/page_1';
import FormPage2 from '../components/page_2';
import FormPage3 from '../components/page_3';
import FormPage4 from '../components/page_4';
import ThankYou from '../components/thank_you';
import AdminPage from '../components/admin_page';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={FormPage1} />
    <Route path="page2" component={FormPage2} />
    <Route path="page3" component={FormPage3} />
    <Route path="page4" component={FormPage4} />
    <Route path="/thankyou" component={ThankYou} />
    <Route path="/admin" component={AdminPage} />
  </Route>
);
