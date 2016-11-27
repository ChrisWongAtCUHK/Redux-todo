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
		let editedTodo = state.get('todos').get(payload);
		return state.set('editedTodo', editedTodo);
	},
	SAVE_EDIT: (state, { payload }) => {
		let todo = state.get('todos').get(payload.key).set('title', payload.title);
		let todos = state.get('todos').set(payload.key, todo);

		return state.merge({'todos': todos});
						 
	},
	CHANGE_TITLE: (state, { payload }) => {
		return state.merge({ 'todo': payload });
	}
}, TodoState);

export default todoReducers;
