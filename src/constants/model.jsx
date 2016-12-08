import Immutable from 'immutable';


export const STORAGE_ID = 'redux-todo';

export const TodoState = Immutable.fromJS({
	'todos': [],					// the list of todo items
	'todo': {								// the todo to be created
		id: '',
		title: '',
		completed: false
	},
	'editedTodo': {},				// the todo item being edidted
	'originalTodo': {},			// the todo item being edited stored in advance 
	'selectedStatus' : ''		// status : active, completed
});
