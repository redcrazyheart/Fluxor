'use strict';

import dispatcher from './dispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

class baseStore extends EventEmitter {
	handlers = [];
	constructor(options) {
		super(options);
		dispatcher.register((action) => {
			if (this.handlers && this.handlers[action.type]) {
				let name = this.handlers[action.type];
				this[name].apply(this, [action.data])
			} else {

			}
		})
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	};

	/**
	* @param {function} callback
	*/
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	};

	/**
	* @param {function} callback
	*/
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

export default baseStore;
