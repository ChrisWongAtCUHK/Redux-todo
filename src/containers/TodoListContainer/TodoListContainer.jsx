import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleCompleted, toggleCompletedAll, deleteTodo, editTodo, saveEdit, revertEdit, changeEdit } from '../../actions';
import { initLSTodos } from '../../constants/localStorage.jsx';


/*
 * Connect to Todo list component
 * */
export default connect(
	(state) => ({
		todos: initLSTodos(state.getIn(['todoReducers', 'todos']),state.getIn(['todoReducers', 'todo'])),
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
