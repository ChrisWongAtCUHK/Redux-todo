import React from 'react';

/*
 * Todo footer component
 * */
const TodoFooter = ({
	todos
}) => (
		<footer id="footer" style={(todos.size > 0) ? {display: 'block'} : {display: 'none'}}>
			<span id="todo-count"><strong>{todos.size}</strong></span>
		</footer>
);

export default TodoFooter;
