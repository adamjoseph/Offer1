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
