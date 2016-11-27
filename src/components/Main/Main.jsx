import React from 'react';
import '../../base.css'; 
import '../../index.css'; 
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const Main = () => (
	<section id="todoapp">
		<header id="header">
			<TodoHeaderContainer />
		</header>
		<section>
			<TodoListContainer />
		</section>
		<footer id="footer">
		</footer>
	</section>
)

export default Main;
