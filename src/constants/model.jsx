import Immutable from 'immutable';

let todos = [];

export const TodoState = Immutable.fromJS({
	'todos': todos,					// the list of todo items
	'todo': {								// the todo to be created
		id: '',
		title: '',
		completed: false
	},
	'editedTodo': {},				// the todo item being edidted
	'originalTodo': {}			// the todo item being edited stored in advance 
});
