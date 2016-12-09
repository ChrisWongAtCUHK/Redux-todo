import { createAction } from 'redux-actions';
import {
	CREATE_TODO,
	TOGGLE_COMPLETED,
	TOGGLE_COMPLETED_ALL,
	DELETE_TODO,
	EDIT_TODO,
	SAVE_EDIT,
	REVERT_EDIT,
	CHANGE_EDIT,
	CHANGE_TITLE,
	CHANGE_STATUS
} from '../constants/actionTypes.jsx';

export const createTodo = createAction(CREATE_TODO);
export const toggleCompleted = createAction(TOGGLE_COMPLETED);
export const toggleCompletedAll = createAction(TOGGLE_COMPLETED_ALL);
export const deleteTodo = createAction(DELETE_TODO);
export const editTodo = createAction(EDIT_TODO);
export const saveEdit = createAction(SAVE_EDIT);
export const revertEdit = createAction(REVERT_EDIT);
export const changeEdit = createAction(CHANGE_EDIT);
export const changeTitle = createAction(CHANGE_TITLE);
export const changeStatus = createAction(CHANGE_STATUS);
