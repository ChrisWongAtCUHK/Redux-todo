import React from 'react';

/*
 * Todo footer component
 * */
const TodoFooter = ({
	onChangeStatus,
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
				<a onClick={onChangeStatus('completed')} className={(selectedStatus === 'completed') ? 'selected': ''} href="#/">Active</a>
			</li>
		</ul>
	</footer>
);

export default TodoFooter;
