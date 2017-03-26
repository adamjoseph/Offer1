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

// export function getAgents() {
//   const request = axios.get('/allagents');
//
//   return {
//     type: 'GET_AGENTS',
//     payload: request
//   }
// }

export function clearAgent() {
  return {
    type: 'CLEAR_AGENT',
    payload: null
  }
}

// export function searchAgent(params) {
//   const usState = params.state ? params.state : "";
//   const agents = Agents.find({'agent.usState' : usState }).fetch();
//   //const foundAgents = agents ? agents : null;
//   return {
//     type: 'SEARCH_AGENT',
//     payload: agents
//   }
// }
