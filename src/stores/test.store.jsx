import { observable } from 'mobx';
import request from 'superagent';

class TestStore {
	@observable todos;

	constructor() {
		request.get('https://todo-api-bb.herokuapp.com/todos')
			.then(todos => this.todos = todos.body )
	}
}

var Store = window.store = new TestStore;

export default Store;