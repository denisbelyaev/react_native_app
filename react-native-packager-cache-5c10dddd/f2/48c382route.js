'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.replaceRoute = replaceRoute;
exports.replaceOrPushRoute = replaceOrPushRoute;
exports.popRoute = popRoute;
var REPLACE_ROUTE = exports.REPLACE_ROUTE = "REPLACE_ROUTE";
var REPLACE_OR_PUSH_ROUTE = exports.REPLACE_OR_PUSH_ROUTE = "REPLACE_OR_PUSH_ROUTE";
var POP_ROUTE = exports.POP_ROUTE = "POP_ROUTE";

function replaceRoute(route) {
    return {
        type: REPLACE_ROUTE,
        route: route
    };
}

function replaceOrPushRoute(route) {
    return {
        type: REPLACE_OR_PUSH_ROUTE,
        route: route
    };
}

function popRoute() {
    return {
        type: POP_ROUTE
    };
}