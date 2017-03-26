"use strict"

class BaseRequester {

	constructor(id, options) {
		this.id = id || '';
		this.options = options;
	}

	get(url) {
		throw new Error('Not yet implemented!')
	}

}

class GamespotRequester extends BaseRequester {

	constructor(id, options) {
		super(id, options)
	}

	get(url) {
		throw new Error('Not yet implemented!')
	}

}

exports.BaseRequester = BaseRequester;
exports.GamespotRequester = GamespotRequester;