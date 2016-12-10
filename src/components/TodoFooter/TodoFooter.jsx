import React from 'react';

/*
 * Todo footer component
 * */
const TodoFooter = ({
	onChangeStatus,
	onClearCompleted,
	todos,
	selectedStatus
}) => (
	<footer id="footer" style={(todos.size > 0) ? {display: 'block'} : {display: 'none'}}>
		<span id="todo-count"><strong>{todos.size}</strong>{(todos.size === 1) ? ' item left' : ' items left'}</span>
		<ul id="filters">
			<li>
				<a onClick={onChangeStatus('')} className={(selectedStatus === '') ? 'selected': ''} href="#/">All</a>
			</li>
			<li>
				<a onClick={onChangeStatus('active')} className={(selectedStatus === 'active') ? 'selected': ''} href="#/">Active</a>
			</li>
			<li>
				<a onClick={onChangeStatus('completed')} className={(selectedStatus === 'completed') ? 'selected': ''} href="#/">Completed</a>
			</li>
		</ul>
		<button id="clear-completed" onClick={onClearCompleted} style={(todos.size > 0) ? {display: 'block'} : {display: 'none'}}>
			Clear completed
		</button>
	</footer>
);

export default TodoFooter;
