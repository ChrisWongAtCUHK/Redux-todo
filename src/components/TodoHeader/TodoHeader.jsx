import React from 'react';

const TodoHeader = ({
	onCreateTodo,
	onChangeTitle,
	todo
}) => (
	<input type="text" id="new-todo" placeholder="Enter Todo List" value={todo.get('title')} 
		onKeyDown={onCreateTodo} onChange={onChangeTitle} autoFocus/>
);

export default TodoHeader;
