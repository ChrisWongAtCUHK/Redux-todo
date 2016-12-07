import React from 'react';

/*
 * Todo footer component
 * */
const TodoFooter = ({
	todos
}) => (
		<footer id="footer" style={(todos.size > 0) ? {display: 'block'} : {display: 'none'}}>
			<span id="todo-count"><strong>{todos.size}</strong>{(todos.size === 1) ? ' item left' : ' items left'}</span>
		</footer>
);

export default TodoFooter;
