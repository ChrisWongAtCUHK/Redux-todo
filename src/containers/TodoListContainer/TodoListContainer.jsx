import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleCompleted, toggleCompletedAll, deleteTodo, editTodo, saveEdit, revertEdit, changeEdit } from '../../actions';
import { STORAGE_ID } from '../../constants/model.jsx';

/*
 * Get the todos from local storage(html5)
 * */
function getTodos(state){
	let todos = state.getIn(['todoReducers', 'todos']);
	
	let storage = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
	console.log(storage);
	/*
	for(let i = 0; i < storage.length; i++){
		let todo = state.getIn(['todoReducers', 'todo']);
		todo = todo.set('title', storage[i].title)
								.set('completed', storage[i].completed)
								.set('id', storage[i].id);
		todos = todos.push(todo);
	}
	*/
	return todos;
}

/*
 * Connect to Todo list component
 * */
export default connect(
	(state) => ({
		todos: getTodos(state),
		editedTodo: state.getIn(['todoReducers', 'editedTodo']),
		originalTodo: state.getIn(['todoReducers', 'originalTodo'])
	}),
	(dispatch) =>({
		// for the checkbox to toggle completed
		onToggleCompleted: (event) => {
			dispatch(toggleCompleted({key: event.target.getAttribute('data-key')}));
		},
		// for the checkbox to toggle completed all
		onToggleCompletedAll: (event) => {
			dispatch(toggleCompletedAll());
		},
		// for the delete button
		onDeleteTodo: (index) => () => (
			dispatch(deleteTodo(index))
		),
		// fot the label double click
		onEditTodo: (index) => () => {
			dispatch(editTodo({index: index}));
		},
		// for the editing textbox
		onSaveEdit: (event) => {
			if(event.key === 'Enter'){
				dispatch(saveEdit());
			} else if(event.key === 'Escape'){
				dispatch(revertEdit({key: event.target.getAttribute('data-key')}));
			}
		},
		// for the editing textbox
		onSaveEditByBlur: () => () => (
			dispatch(saveEdit())	
		),
		// for the editing textbox
		onChangeEdit: (event) => (
			dispatch(changeEdit({title: event.target.value, key: event.target.getAttribute('data-key')}))	
		)
	})
)(TodoList);
