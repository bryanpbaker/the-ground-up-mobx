import React, { Component } from 'react';

// import test store and observer
import Store from '../stores/test.store';
import { observer } from 'mobx-react';

// add observer decorator to Test class to watch the test store observables
@observer class Test extends Component {
	// set Store todos to this.state.todos
	constructor() {
		super()
		this.state = {
			todos: Store.todos
		}
	}

	render() {
		// build todo list using .map()
		let id = 1;
		const todoList = this.state.todos.map((todo) => {
			return(
				<li key={id++}>{todo}</li>
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
	}
}

export default Test;
