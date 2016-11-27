import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/model.jsx';

const todoReducers = handleActions({
	CREATE_TODO: (state) => {
		let todo = state.get('todo');
		let todos = state.get('todos').push(todo);
		return state.set('todos', todos);
	},
	DELETE_TODO: (state, { payload }) => {
		let todos = state.get('todos').splice(payload.index, 1);
		return state.set('todos', todos);
	},
	CHANGE_TITLE: (state, { payload }) => {
		return state.merge({ 'todo': payload });
	}
}, TodoState);

export default todoReducers;
