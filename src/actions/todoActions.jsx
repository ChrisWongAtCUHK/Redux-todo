import { createAction } from 'redux-actions';
import {
	CREATE_TODO,
	CHANGE_TEXT
} from '../constants/actionTypes.jsx';

export const createTodo = createAction('CREATE_TODO');
export const changeText = createAction('CHANGE_TEXT');
