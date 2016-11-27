import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
	changeTitle,
	createTodo
} from '../../actions';

export default connect(
	(state) => ({
		todo: state.getIn(['todo', 'todo'])
	}),
	(dispatch) =>({
		onChangeTitle: (event) => (
			dispatch(changeTitle({ title: event.target.value }))
		),
		onCreateTodo: () => (
			dispatch(createTodo())
		)
	})
)(TodoHeader);
