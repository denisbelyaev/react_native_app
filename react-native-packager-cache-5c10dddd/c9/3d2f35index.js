
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _drawer = require('./drawer');

var _drawer2 = babelHelpers.interopRequireDefault(_drawer);

var _route = require('./route');

var _route2 = babelHelpers.interopRequireDefault(_route);

exports.default = (0, _redux.combineReducers)({
    drawer: _drawer2.default,
    route: _route2.default
});