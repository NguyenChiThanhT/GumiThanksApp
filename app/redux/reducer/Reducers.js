import {combineReducers} from 'redux';
import TodoListReducer from './TodoListReducer';
import OptionListReducer from './OptionListReducer';
import ToggleReducer from './ToggleReducer';
const reducer = combineReducers({
     todolist:TodoListReducer,
     OptionList:OptionListReducer,
     toggle:ToggleReducer,
});
export default reducer;
