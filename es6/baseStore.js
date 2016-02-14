'use strict';

import dispatcher from './dispatcher';

class baseStore {
	handlers = [];
	constructor() {
		dispatcher.register((action) => {
			if (this.handlers[action.type]) {
				this.handlers[action.type](action.data);
			} else {

			}
		})
	}
}

export default baseStore;
