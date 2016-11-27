import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { deleteTodo, editTodo } from '../../actions';

export default connect(
	(state) => ({
		todos: state.getIn(['todo', 'todos']),
		editedTodo: state.getIn(['todo', 'editedTodo'])
	}),
	(dispatch) =>({
		onDeleteTodo: (index) => () => (
			dispatch(deleteTodo(index))
		),
		onEditTodo: (index) => () => (
			dispatch(editTodo(index))	
		)
	})
)(TodoList);
