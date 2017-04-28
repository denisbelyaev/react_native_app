'use strict';
import { ADD_USER, LIST_USER } from './actions';

export default function (state = [], action) {
    if (action.type === ADD_USER.REQUEST) {
        console.log("---------------- ADD_USER.REQUEST")
        return [...state, action.payload];
    }
    if (action.type === ADD_USER.SUCCEEDED) {
        console.log("---------------- ADD_USER.SUCCEEDED")
        return [...state, action.payload];
    }
    if (action.type === ADD_USER.FAILED) {
        console.log("---------------- ADD_USER.FAILED")
        return [...state, action.payload];
    }
    if (action.type === LIST_USER.REQUEST) {
        console.log("---------------- LIST_USER.REQUEST")
        return [...state, action.payload];
    }
    if (action.type === LIST_USER.SUCCEEDED) {
        console.log("---------------- LIST_USER.SUCCEEDED")
        return [...state, action.payload];
    }
    if (action.type === LIST_USER.FAILED) {
        console.log("---------------- LIST_USER.FAILED")
        return [...state, action.payload];
    }
    return state;
}

