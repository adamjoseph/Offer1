//Libraries or function
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

//import base routes module
import routes from './routes/routes';
//import combined reducers
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
));

Meteor.startup(() => {
  render(
    <Provider store={store} >
      <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('root'));
});
