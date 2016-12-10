import { connect } from 'react-redux';
import TodoFooter from '../../components/TodoFooter';
import { initLSTodos } from '../../constants/localStorage.jsx';
import { changeStatus, clearCompleted } from '../../actions';

/*
 * Connect to Todo footer component
 * */
export default connect(
	(state) => ({
		todos: initLSTodos(state.getIn(['todoReducers', 'todos']),state.getIn(['todoReducers', 'todo'])),
		selectedStatus: state.getIn(['todoReducers', 'selectedStatus'])
	}),
	(dispatch) =>({
		// change the status 
		onChangeStatus: (s) => () => {
			dispatch(changeStatus({ s }));
		},
		// clear completed todos
		onClearCompleted: (event) => (
			dispatch(clearCompleted())									
		)
	})
)(TodoFooter);
