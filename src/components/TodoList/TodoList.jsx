import React from 'react';

const TodoList = ({
	todos
}) => (
	<section>
		<ul id="todo-list">
		{
			todos.map((todo, index) => (
				<li key={index} className={todo.get('completed')}>
					<div className="view">
						<input className="toggle" type="checkbox" />
						<label>{todo.get('title')}</label>
					</div>
				</li>		
			)).toJS()
		}
		</ul>
	</section>
);

export default TodoList;
