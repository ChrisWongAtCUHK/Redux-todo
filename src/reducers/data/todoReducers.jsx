import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/model.jsx';

const todoReducers = handleActions({
	CREATE_TODO: (state) => {
		let todo = state.get('todo');
		let todos = state.get('todos').push(todo);
		return state.set('todos', todos);
	},
	DELETE_TODO: (state, { payload }) => {
		let todos = state.get('todos').splice(payload, 1);
		return state.set('todos', todos);
	},
	EDIT_TODO: (state, { payload }) => {
		let editedTodo = state.get('todos').get(payload.index);
		return state.set('editedTodo', editedTodo).set('originalTodo', editedTodo);
	},
	SAVE_EDIT: (state, { payload }) => {
		let editedTodo = state.get('editedTodo').set('title', '');
		return state.set('editedTodo', editedTodo);					 
	},
	REVERT_EDIT: (state, { payload }) => {
		let originalTodo = state.get('originalTodo');
		let todos = state.get('todos').set(payload.key, originalTodo);
		return state.set('todos', todos).set('originalTodo', originalTodo);					 
	},
	CHANGE_EDIT: (state, { payload }) => {
		let todo = state.get('todos').get(payload.key).set('title', payload.title);
		let todos = state.get('todos').set(payload.key, todo);
		let editedTodo = state.get('editedTodo').set('title', payload.title);
		return state.set('todos', todos).set('editedTodo', editedTodo);
						 
	},
	CHANGE_TITLE: (state, { payload }) => {
		return state.merge({ 'todo': payload });
	}
}, TodoState);

export default todoReducers;
