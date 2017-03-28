//contains all action creators
//const AGENT_SELECTED = 'AGENT_SELECTED';
//import { Agents } from '../../imports/collections/agents';
// import axios from 'axios';

export function selectAgent(agent) {
  return {
    type: 'AGENT_SELECTED',
    payload: agent
  }
}


export function clearAgent() {
  return {
    type: 'CLEAR_AGENT',
    payload: null
  }
}

// export function loginAgent() {
//   const agent = Meteor.user();
//   console.log('first hit');
//   return {
//     type: 'AGENT_LOGIN',
//     payload: agent
//   }
// }
