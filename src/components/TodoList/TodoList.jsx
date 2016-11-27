import React from 'react';

/*
 * Class names, space delimiter
 * */
function classNames(todo){
	let names = [];
	if(todo.get('completed')){
		names.push('completed');
	}
	return names.join(' ');
}

const TodoList = ({
	onDeleteTodo,
	todos
}) => (
	<section>
		<ul id="todo-list">
		{
			todos.map((todo, index) => (
				<li key={index} 
						className={`${classNames(todo)}`}>
					<div className="view">
						<input className="toggle" type="checkbox" />
						<label>{todo.get('title')}</label>
						<button className="destroy" onClick={onDeleteTodo(index)}></button>
					</div>
				</li>		
			)).toJS()
		}
		</ul>
	</section>
);

export default TodoList;
