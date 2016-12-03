import Immutable from 'immutable';

let todos = [];

export const TodoState = Immutable.fromJS({
	'todos': todos,
	'todo': {
		id: '',
		title: '',
		completed: false
	},
	'editedTodo': {},
	'originalTodo': {}
});
