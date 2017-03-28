import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SelectedAgent from './reducer_selected_agent';
import GetAgents from './reducer_agents';
//import LoggedInAgent from './reducer_login_agent';


const rootReducer = combineReducers({
  form: formReducer,
  selectedAgent: SelectedAgent
});

export default rootReducer;

// agents: GetAgents
// loggedInAgent: LoggedInAgent
