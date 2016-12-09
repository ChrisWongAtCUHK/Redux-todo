import { handleActions } from 'redux-actions';
import { getLSTodos, setLSTodos } from '../../constants/localStorage.jsx';
import {  TodoState } from '../../constants/model.jsx';

/*
 * Handle all actions
 * */
const todoReducers = handleActions({
	// how to create new todo
	CREATE_TODO: (state) => {
		let todo = state.get('todo');
	
		// do not create todo with empty todo
		if(todo.get('title').trim() === ''){
			// do nothing
			return state;
		}
		
		let todos = getLSTodos(state);
		todo = todo.set('id', todos.size);
		todos = todos.push(todo);
		setLSTodos(todos);

		return state.set('todos', todos);
	},
	// how to toggle a todo item completed
	TOGGLE_COMPLETED: (state, { payload }) => {
		let todos = getLSTodos(state);
		let todo = todos.get(payload.key);
		let completed = !todo.get('completed');
		todos = todos.set(payload.key, todo.set('completed', completed));
		console.log(todos.get(payload.key).get('completed'));
		return state.set('todos', todos);
	},
	// how to toggle all todo items completed
	TOGGLE_COMPLETED_ALL: (state, { payload }) => {
		let todos = getLSTodos(state);

		// if all todo items are checked, it should be considered to be all unchecked for next
		let checkedCount = 0;
		for(let i = 0; i < todos.size; i++){
			let completed = todos.get(i).get('completed');
			if(completed){
				checkedCount++;
			}
		}
		let allChecked = checkedCount === todos.size ? true : false;

		// update all todo itmes
		for(let j = 0; j < todos.size; j++){
			let todo = todos.get(j);
			let completed = !todo.get('completed');
			if(completed !== allChecked){
				todos = todos.set(j, todo.set('completed', completed));
			}
		}
		return setLSTodos(state, todos);
	},
	// how to delete a todo item
	DELETE_TODO: (state, { payload }) => {
		let todos = getLSTodos(state);
		todos = todos.splice(payload, 1);
		setLSTodos(todos);
		return setLSTodos(state, todos);
	},
	// how to kick off the edit of a todo item
	EDIT_TODO: (state, { payload }) => {
		let todos = getLSTodos(state);
		let editedTodo = todos.get(payload.index);
		return state.set('editedTodo', editedTodo).set('originalTodo', editedTodo);
	},
	// how to save a todo item being edited
	SAVE_EDIT: (state, { payload }) => {
		let editedTodo = state.get('editedTodo').set('title', '').set('id', '');
		return state.set('editedTodo', editedTodo);					 
	},
	// how to revert a todo item being edited to original 
	REVERT_EDIT: (state, { payload }) => {
		let originalTodo = state.get('originalTodo');
		let todos = getLSTodos(state);
		todos = todos.set(payload.key, originalTodo);
		let editedTodo = state.get('editedTodo').set('title', '').set('id', '');
		return setLSTodos(state, todos).set('originalTodo', originalTodo).set('editedTodo', editedTodo);
	},
	// how to change the todo item being edited
	CHANGE_EDIT: (state, { payload }) => {
		let todos = getLSTodos(state);
		let todo = todos.get(payload.key).set('title', payload.title);
		todos = todos.set(payload.key, todo);
		let editedTodo = state.get('editedTodo').set('title', payload.title);
		todos.set('editedTodo', editedTodo);
		return setLSTodos(state, todos).set('editedTodo', editedTodo);
						 
	},
	// how to change the todo title before create
	CHANGE_TITLE: (state, { payload }) => {
		return state.merge({ 'todo': payload });
	},
	// how to change the selected status
	CHANGE_STATUS: (state, { payload }) => {
		return state.set('selectedStatus', payload.s);
	}
}, TodoState);

export default todoReducers;
