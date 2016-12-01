import React from 'react';

/*
 * Class names, space delimiter
 * */
function classNames(todo, editedTodo){
	let names = [];
	if(todo.get('completed')){
		names.push('completed');
	}
	if(todo.get('title') === editedTodo.get('title')){
		names.push('editing');
	}
	return names.join(' ');
}

const TodoList = ({
	onDeleteTodo,
	onEditTodo,
	onKeyDown,
	onChangeEdit,
	todos,
	editedTodo
}) => {
	let input;
	const focus = () => {
		if(input){
			input.focus();
			console.log(input);
		}
	};

	return (
		<section>
			<ul id="todo-list">
			{
				todos.map((todo, index) => (
					<li key={index} 
							className={`${classNames(todo, editedTodo)}`}>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label onDoubleClick={onEditTodo(index, focus)}>{todo.get('title')}</label>
							<button className="destroy" onClick={onDeleteTodo(index)}></button>
						</div>
						<input type="text" ref={e => (input = e)} className="edit" value={todo.get('title')} data-key={index} onChange={onChangeEdit}/>
					</li>		
				)).toJS()
			}
			</ul>
		</section>
	)
};

export default TodoList;
