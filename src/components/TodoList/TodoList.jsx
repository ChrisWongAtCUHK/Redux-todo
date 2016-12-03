import React from 'react';


const TodoList = ({
	onToggleCompleted,
	onToggleCompletedAll,
	onDeleteTodo,
	onEditTodo,
	onSaveEdit,
	onSaveEditByBlur,
	onKeyDown,
	onChangeEdit,
	todos,
	editedTodo
}) => {

	// The class names for the list item
	const classNames = (todo, editedTodo) => {
		let names = [];
		if(todo.get('completed')){
			names.push('completed');
		}
		if(todo.get('title') === editedTodo.get('title')){
			names.push('editing');
		}
		return names.join(' ');
	};

	// Focus on the element who pass them self
	const focus = (input) => {
		if(input){
			input.focus();
		}
	};

	// render
	return (
		<section id="main">
			<input id="toggle-all" type="checkbox" onChange={onToggleCompletedAll} /> 
			<ul id="todo-list">
			{
				todos.map((todo, index) => (
					<li key={index} 
							className={`${classNames(todo, editedTodo)}`}>
						<div className="view">
							<input className="toggle" type="checkbox" data-key={index} onChange={onToggleCompleted}/>
							<label onDoubleClick={onEditTodo(index)}>{todo.get('title')}</label>
							<button className="destroy" onClick={onDeleteTodo(index)}></button>
						</div>
						<input type="text" ref={e => {focus(e)}} className="edit" value={todo.get('title')} data-key={index} 
							onChange={onChangeEdit} onKeyDown={onSaveEdit} onBlur={onSaveEditByBlur()}/>
					</li>		
				)).toJS()
			}
			</ul>
		</section>
	)
};

export default TodoList;
