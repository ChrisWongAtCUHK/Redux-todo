import { combineReducers } from 'redux-immutable';
import todo from './data/todoReducers.jsx'; 

const rootReducer = combineReducers({todo});

export default rootReducer;
