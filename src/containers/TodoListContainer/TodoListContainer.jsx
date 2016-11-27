import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { deleteTodo, editTodo, changeEdit } from '../../actions';

export default connect(
	(state) => ({
		todos: state.getIn(['todoReducers', 'todos']),
		editedTodo: state.getIn(['todoReducers', 'editedTodo'])
	}),
	(dispatch) =>({
		onKeyDown: (event) => {
			if(event.key === 'Enter'){
				event.preventDefault();
			}
		},
		onDeleteTodo: (index) => () => (
			dispatch(deleteTodo(index))
		),
		onEditTodo: (index) => () => (
			dispatch(editTodo(index))	
		),
		onChangeEdit: (event) => (
			dispatch(changeEdit({title: event.target.value, key: event.target.getAttribute('data-key')}))	
		)
	})
)(TodoList);
