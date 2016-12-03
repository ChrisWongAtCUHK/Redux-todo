import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
	changeTitle,
	createTodo
} from '../../actions';

/*
 * Connect to Todo header component
 * */
export default connect(
	(state) => ({
		todo: state.getIn(['todoReducers', 'todo'])
	}),
	(dispatch) =>({
		// bind to the onKeyDown, to create new todo item, default with false in 'completed'
		onCreateTodo: (event) => {
			if(event.key === 'Enter'){
				event.preventDefault();

				dispatch(createTodo());
				dispatch(changeTitle({ title: '' }));
			}
		},
		// bind to the onChange, interaction with the todo 
		onChangeTitle: (event) => {
			dispatch(changeTitle({ title: event.target.value, completed: false }));
		}
	})
)(TodoHeader);
