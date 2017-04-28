
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = babelHelpers.interopRequireDefault(_reducers);

var _reduxPersist = require('redux-persist');

var _reactNative = require('react-native');

function configureStore(onCompletion) {
    var enhancer = (0, _redux.compose)();

    var store = (0, _redux.createStore)(_reducers2.default, enhancer);
    (0, _reduxPersist.persistStore)(store, { storage: _reactNative.AsyncStorage }, function () {
        return onCompletion(store);
    });

    return store;
}