import { createAction } from 'redux-actions';
import {
	CREATE_TODO,
	DELETE_TODO,
	CHANGE_TITLE
} from '../constants/actionTypes.jsx';

export const createTodo = createAction(CREATE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const changeTitle = createAction(CHANGE_TITLE);