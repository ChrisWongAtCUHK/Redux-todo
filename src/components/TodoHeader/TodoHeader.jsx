import React from 'react';

const TodoHeader = ({
	onChangeTitle,
	onCreateTodo,
	todo
}) => (
	<form>
		<input type="text" id="new-todo" placeholder="Enter Todo List" onChange={onChangeTitle} autoFocus/>
	</form>
);

export default TodoHeader;
