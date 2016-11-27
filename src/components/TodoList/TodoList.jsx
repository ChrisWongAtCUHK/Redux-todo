import React from 'react';

const TodoList = ({
	todos
}) => (
	<div>
		<ul id="todo-list">
		{
			todos.map((todo, index) => (
				<li key={index}>{todo.get('title')}</li>		
			)).toJS()
		}
		</ul>
	</div>
);

export default TodoList;
