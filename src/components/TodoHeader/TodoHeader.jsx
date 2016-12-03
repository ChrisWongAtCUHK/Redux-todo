import React from 'react';

/*
 * Todo header component
 * */
const TodoHeader = ({
	onCreateTodo,
	onChangeTitle,
	todo
}) => (
	// textbox for create new todo
	<input type="text" id="new-todo" placeholder="Enter Todo List" value={todo.get('title')} 
		onKeyDown={onCreateTodo} onChange={onChangeTitle} autoFocus/>
);

export default TodoHeader;
