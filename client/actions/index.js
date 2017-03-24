//contains all action creators
//const AGENT_SELECTED = 'AGENT_SELECTED';

export function selectAgent(agent) {
  return {
    type: 'AGENT_SELECTED',
    payload: agent
  }
}

export function getAgents() {
  return {
    type: 'GET_AGENTS',
    payload: agents
  }
}

export function clearAgent() {
  return {
    type: 'CLEAR_AGENT',
    payload: null
  }
}
