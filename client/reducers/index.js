import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SelectedAgent from './reducer_selected_agent';


const rootReducer = combineReducers({
  form: formReducer,
  selectedAgent: SelectedAgent
});

export default rootReducer;
