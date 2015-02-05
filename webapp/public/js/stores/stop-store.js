 var AppDispatcher = require('../dispatcher/app-dispatcher'),
 	EventEmitter = require('events').EventEmitter,
 	assign = require('object-assign'),
 	request = require('superagent');

var _collection = [],
	_stops = [],
	CHANGE_EVENT = 'change';

var Store = assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _collection;
	},
	getCurrentStops: function() {
		return _stops;
	}
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.addListener(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action,
		text;

	switch(action.actionType) {
		case 'stops_success':
			_stops = action.payload;
			break;
		default:
			return true;
	}

	Store.emitChange();
	return true;
});

module.exports = Store;
