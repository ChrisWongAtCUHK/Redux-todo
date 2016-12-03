import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
	changeTitle,
	createTodo
} from '../../actions';

export default connect(
	(state) => ({
		todo: state.getIn(['todoReducers', 'todo'])
	}),
	(dispatch) =>({
		onCreateTodo: (event) => {
			if(event.key === 'Enter'){
				event.preventDefault();

				dispatch(createTodo());
				dispatch(changeTitle({ title: '' }));
			}
		},
		onChangeTitle: (event) => {
			dispatch(changeTitle({ title: event.target.value, completed: false }));
		}
	})
)(TodoHeader);
