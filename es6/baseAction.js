'use strict';

import dispatcher from './dispatcher';

class baseAction {
	constructor() {
		this.dispatch = function dispatcher(type, data) {
			dispatcher.dispatch({
		      type: type,
		      data: data
		    });
		}
	}
}

export default baseAction;