import React from 'react';

/*
 * Todo list component
 * */
const TodoList = ({
	onToggleCompleted,
	onToggleCompletedAll,
	onDeleteTodo,
	onEditTodo,
	onSaveEdit,
	onSaveEditByBlur,
	onChangeEdit,
	todos,
	editedTodo,
	selectedStatus
}) => {

	// The class names for the list item
	const classNames = (todo, editedTodo) => {
		let names = [];
		if(todo.get('completed')){
			names.push('completed');
		}
		if(todo.get('id') === editedTodo.get('id')){
			names.push('editing');
		}
		return names.join(' ');
	};

	// Filter by active and completed
	const statusFilter = (todo, selectedStatus) => {
		let show = { display: 'block' };
		let hide = { display: 'none' };
		let completed = todo.get('completed');
		switch(selectedStatus){
			case 'active':
				if(completed)	return hide;
				else return show;
			
			case 'completed':
				if(completed)	return show;
				else return hide;
			
			default:
				return show;
		}
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
					// its class with 'editing' would enable the edit of 'edit' textbox
					<li key={index} 
							className={`${classNames(todo, editedTodo)}`} style={statusFilter(todo, selectedStatus)}>
						<div className="view">
							<input className="toggle" type="checkbox" data-key={index} onChange={onToggleCompleted} checked={todo.get('completed')}/>
							<label onDoubleClick={onEditTodo(index)}>{todo.get('title')}</label>
							{/* to delete this todo item */}
							<button className="destroy" onClick={onDeleteTodo(index)}></button>
						</div>
						{/* 
							* 1. this textbox is only enabled if the parent <li> has the class 'editing'
							* 2. ref invokes focus method by passing itself into it
							* 3. 
							* */}
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
