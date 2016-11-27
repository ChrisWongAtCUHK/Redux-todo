import { combineReducers } from 'redux-immutable';
import todoReducers from './data/todoReducers.jsx'; 

const rootReducer = combineReducers({todoReducers});

export default rootReducer;
