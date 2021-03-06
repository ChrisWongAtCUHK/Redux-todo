let STORAGE_ID = 'redux-todo';

/*
 * Get the todos from local storage(html5)
 * */
export const initLSTodos = (todos, todo) => {
	let storage = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
	
	if(todos.size === 0){
		for(let i = 0; i < storage.length; i++){
			todo = todo.set('title', storage[i].title)
									.set('completed', storage[i].completed)
									.set('id', storage[i].id);
			todos = todos.push(todo);
		}
	}
	
	return todos;
};

/*
 * Get the todos from local storage(html5)
 * */
export const getLSTodos = (state) => {
	let todos = state.get('todos');
	let todo = state.get('todo');
	let storage = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

	if(todos.size === 0){
		for(let i = 0; i < storage.length; i++){
			todo = todo.set('title', storage[i].title)
									.set('completed', storage[i].completed)
									.set('id', storage[i].id);
			todos = todos.push(todo);
		}
	}
	
	return todos;
};

/*
 * Set todos into local storage(html5)
 * */
export const setLSTodos = (state, todos) => {
		localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		return state.set('todos', todos);
};
