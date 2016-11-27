import React from 'react';

const TodoHeader = ({
	onKeyDown,
	onChangeTitle,
	todo
}) => (
	<input type="text" id="new-todo" placeholder="Enter Todo List" value={todo.get('title')} onKeyDown={onKeyDown} onChange={onChangeTitle} autoFocus/>
);

export default TodoHeader;
