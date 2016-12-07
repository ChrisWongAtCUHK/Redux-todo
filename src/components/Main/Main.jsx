import React from 'react';
import '../../base.css'; 
import '../../index.css'; 
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoFooterContainer from '../../containers/TodoFooterContainer';

const Main = () => (
	<section id="todoapp">
		<header id="header">
			<TodoHeaderContainer />
		</header>
		<TodoListContainer />
		<TodoFooterContainer />
	</section>
)

export default Main;
