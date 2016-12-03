import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleCompleted, toggleCompletedAll, deleteTodo, editTodo, saveEdit, revertEdit, changeEdit } from '../../actions';

export default connect(
	(state) => ({
		todos: state.getIn(['todoReducers', 'todos']),
		editedTodo: state.getIn(['todoReducers', 'editedTodo']),
		originalTodo: state.getIn(['todoReducers', 'originalTodo'])
	}),
	(dispatch) =>({
		onKeyDown: (event) => {
			if(event.key === 'Enter'){
				event.preventDefault();
			}
		},
		onToggleCompleted: (event) => {
			dispatch(toggleCompleted({key: event.target.getAttribute('data-key')}));
		},
		onToggleCompletedAll: (event) => {
			dispatch(toggleCompletedAll());
		},
		onDeleteTodo: (index) => () => (
			dispatch(deleteTodo(index))
		),
		onEditTodo: (index) => () => (
			dispatch(editTodo({index: index}))	
		),
		onSaveEdit: (event) => {
			if(event.key === 'Enter'){
				dispatch(saveEdit());
			} else if(event.key === 'Escape'){
				dispatch(revertEdit({key: event.target.getAttribute('data-key')}));
			}
		},
		onSaveEditByBlur: () => () => (
			dispatch(saveEdit())	
		),
		onChangeEdit: (event) => (
			dispatch(changeEdit({title: event.target.value, key: event.target.getAttribute('data-key')}))	
		)
	})
)(TodoList);
