
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    if (action.type === _route.REPLACE_ROUTE) {
        _AppNavigator.globalNav.navigator.replace({ id: action.route });
        var _routes = state.routes;
        _routes.pop();
        return {
            routes: [].concat(babelHelpers.toConsumableArray(_routes), [action.route])
        };
    }

    if (action.type === _route.REPLACE_OR_PUSH_ROUTE) {
        var _routes2 = state.routes;

        if (_routes2[_routes2.length - 1] == 'dashboard') {
            if (action.route != 'dashboard') _AppNavigator.globalNav.navigator.push({ id: action.route });else _routes2 = [];
        } else {
            if (action.route == 'dashboard') {
                _AppNavigator.globalNav.navigator.resetTo({ id: 'dashboard' });
                _routes2 = [];
            } else {
                _AppNavigator.globalNav.navigator.replace({ id: action.route });
                _routes2.pop();
            }
        }

        return {
            routes: [].concat(babelHelpers.toConsumableArray(_routes2), [action.route])
        };
    }

    if (action.type === _route.POP_ROUTE) {
        _AppNavigator.globalNav.navigator.pop();
        var _routes3 = state.routes;
        _routes3.pop();
        return {
            routes: _routes3
        };
    }

    return state;
};

var _AppNavigator = require('../AppNavigator');

var _route = require('../actions/route');

var _constants = require('redux-persist/constants');

var initialState = {
    routes: ['login']
};