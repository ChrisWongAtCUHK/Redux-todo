import { createAction } from 'redux-actions';
import {
	CREATE_TODO,
	DELETE_TODO,
	EDIT_TODO,
	CHANGE_EDIT,
	CHANGE_TITLE
} from '../constants/actionTypes.jsx';

export const createTodo = createAction(CREATE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const editTodo = createAction(EDIT_TODO);
export const changeEdit = createAction(CHANGE_EDIT);
export const changeTitle = createAction(CHANGE_TITLE);
