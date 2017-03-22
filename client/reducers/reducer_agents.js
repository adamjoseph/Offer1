export default function(state = null, action) {
  switch(action.type) {
    case 'GET_AGENTS':
      return action.agents;
  }

  return state;
}
