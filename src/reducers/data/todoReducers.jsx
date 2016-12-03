import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/model.jsx';

const todoReducers = handleActions({
	CREATE_TODO: (state) => {
		let todo = state.get('todo');
		let todos = state.get('todos').push(todo);
		return state.set('todos', todos);
	},
	TOGGLE_COMPLETED: (state, { payload }) => {
		let todo = state.get('todos').get(payload.key);
		let completed = !todo.get('completed');
		let todos = state.get('todos').set(payload.key, todo.set('completed', completed));
		return state.set('todos', todos);
	},
	TOGGLE_COMPLETED_ALL: (state, { payload }) => {
		let todos = state.get('todos');

		// if all todo items are checked, it should be considered to be all unchecked for next
		let checkedCount = 0;
		for(let i = 0; i < todos.size; i++){
			let completed = todos.get(i).get('completed');
			if(completed){
				checkedCount++;
			}
		}
		let allChecked = checkedCount === todos.size ? true : false;

		for(let j = 0; j < todos.size; j++){
			let todo = todos.get(j);
			let completed = !todo.get('completed');
			if(completed !== allChecked){
				todos = todos.set(j, todo.set('completed', completed));
			}
		}
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
