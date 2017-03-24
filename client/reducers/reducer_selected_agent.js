export default function(state = null, action) {
  switch(action.type) {
    case 'AGENT_SELECTED':
      return action.payload;

    case 'CLEAR_AGENT':
      return action.payload;
  }

  return state;
}
