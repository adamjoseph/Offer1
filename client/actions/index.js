//contains all action creators
//const AGENT_SELECTED = 'AGENT_SELECTED';

export function selectAgent(agent) {
  console.log('select agent fired');
  return {
    type: 'AGENT_SELECTED',
    payload: agent
  }
}
