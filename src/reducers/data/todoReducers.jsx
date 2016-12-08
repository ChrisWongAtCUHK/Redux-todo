import { handleActions } from 'redux-actions';
import { getLSTodos, setLSTodos, TodoState } from '../../constants/model.jsx';

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
		
		let todos = state.get('todos');
		todo = todo.set('id', todos.size);
		todos = getLSTodos(todos, todo);

		console.log(todos);
		
		setLSTodos(todos);

		return state.set('todos', todos);
	},
	// how to toggle a todo item completed
	TOGGLE_COMPLETED: (state, { payload }) => {
		let todo = state.get('todos').get(payload.key);
		let completed = !todo.get('completed');
		let todos = state.get('todos').set(payload.key, todo.set('completed', completed));
		return state.set('todos', todos);
	},
	// how to toggle all todo items completed
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

		// update all todo itmes
		for(let j = 0; j < todos.size; j++){
			let todo = todos.get(j);
			let completed = !todo.get('completed');
			if(completed !== allChecked){
				todos = todos.set(j, todo.set('completed', completed));
			}
		}
		return state.set('todos', todos);
	},
	// how to delete a todo item
	DELETE_TODO: (state, { payload }) => {
		let todos = state.get('todos').splice(payload, 1);
		return state.set('todos', todos);
	},
	// how to kick off the edit of a todo item
	EDIT_TODO: (state, { payload }) => {
		let editedTodo = state.get('todos').get(payload.index);
		return state.set('editedTodo', editedTodo).set('originalTodo', editedTodo);
	},
	// how to save a todo item being edited
	SAVE_EDIT: (state, { payload }) => {
		let editedTodo = state.get('editedTodo').set('title', '').set('id', '');
		return state.set('editedTodo', editedTodo);					 
	},
	// how to revert a todo item being edited to origial 
	REVERT_EDIT: (state, { payload }) => {
		let originalTodo = state.get('originalTodo');
		let todos = state.get('todos').set(payload.key, originalTodo);
		return state.set('todos', todos).set('originalTodo', originalTodo);					 
	},
	// how to change the todo item being edited
	CHANGE_EDIT: (state, { payload }) => {
		let todo = state.get('todos').get(payload.key).set('title', payload.title);
		let todos = state.get('todos').set(payload.key, todo);
		let editedTodo = state.get('editedTodo').set('title', payload.title);
		return state.set('todos', todos).set('editedTodo', editedTodo);
						 
	},
	// how to change the todo title before create
	CHANGE_TITLE: (state, { payload }) => {
		return state.merge({ 'todo': payload });
	}
}, TodoState);

export default todoReducers;
