import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

export default connect(
	(state) => ({
		todos: state.getIn(['todo', 'todos'])
	}),
	(dispatch) =>({
	})
)(TodoList);
