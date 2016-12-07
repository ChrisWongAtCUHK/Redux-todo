import { connect } from 'react-redux';
import TodoFooter from '../../components/TodoFooter';

/*
 * Connect to Todo footer component
 * */
export default connect(
	(state) => ({
		todos: state.getIn(['todoReducers', 'todos'])
	}),
	(dispatch) =>({
	})
)(TodoFooter);
