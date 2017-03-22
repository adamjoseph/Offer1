import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SelectedAgent from './reducer_selected_agent';
import GetAgents from './reducer_agents';


const rootReducer = combineReducers({
  form: formReducer,
  selectedAgent: SelectedAgent,
  agents: GetAgents
});

export default rootReducer;
