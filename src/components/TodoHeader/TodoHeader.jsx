import React from 'react';
import ReactDOM from 'react-dom';

const TodoHeader = ({
	onChangeText,
	onCreateTodo,
	todo
}) => (
	<form>
		<input type="text" id="new-todo" placeholder="Enter Todo List" autoFocus/>
	</form>
);

export default TodoHeader;
