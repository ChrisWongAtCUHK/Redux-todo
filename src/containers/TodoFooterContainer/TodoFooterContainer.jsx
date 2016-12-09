import { connect } from 'react-redux';
import TodoFooter from '../../components/TodoFooter';
import { initLSTodos } from '../../constants/localStorage.jsx';
import { changeStatus } from '../../actions';

/*
 * Connect to Todo footer component
 * */
export default connect(
	(state) => ({
		todos: initLSTodos(state.getIn(['todoReducers', 'todos']),state.getIn(['todoReducers', 'todo'])),
		selectedStatus: state.getIn(['todoReducers', 'selectedStatus'])
	}),
	(dispatch) =>({
		// 
		onChangeStatus: (s) => () => {
			dispatch(changeStatus({ s }));
		},
	})
)(TodoFooter);
