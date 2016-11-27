import Immutable from 'immutable';

let todos = [];

export const TodoState = Immutable.fromJS({
	'todos': todos,
	'todo': {
		id: '',
		text: '',
		completed: false
	}
});
