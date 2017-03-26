//Libraries or function
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory';
import { Agents } from '../imports/collections/agents';

const history = createBrowserHistory();

//import base routes module
import routes from './routes/routes';

//Components
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(promise)
));

// Tracker.autorun(() => {
//   console.log('autorun hit');
//   store.dispatch({
//     type: 'GET_AGENTS',
//     agents: Agents.find({'reviewed': false}).fetch()
//   });
// });

//const createStoreWithMiddleWare = applyMiddleware()(createStore);
//createStoreWithMiddleWare(reducers)
Meteor.startup(() => {
  render(
    <Provider store={store} >
      <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('root'));
});
