import { observable } from 'mobx';

class TestStore {
	@observable todos = ['buy milk', 'buy eggs', 'buy bread'];
}

var Store = window.store = new TestStore;

export default Store;