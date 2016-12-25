import React, { Component } from 'react';

// import test store and observer
import Store from '../stores/test.store';
import { observer } from 'mobx-react';

// add observer decorator to Test class to watch the test store observables
@observer class Test extends Component {
	render() {
		const todos = Store.todos;

		if(todos) {
			// build todo list using .map()
			const todoList = todos.map(todo => {
				return(
					<li key={todo.id}>{todo.description}</li>
				)
			});

			// render todo list
			return(
		        <div className="test-component">
		            <ul>
		            	{todoList}
		            </ul>
		        </div>
		    )
		} else {
			return <div>Loading...</div>
		}
	}
}

export default Test;
