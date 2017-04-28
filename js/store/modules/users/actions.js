'use strict';
import {createActionTypes, createAction} from '../actions'

export const ADD_USER = createActionTypes('ADD_USER');
export const GET_USER = createActionTypes('GET_USER');
export const UPDATE_USER = createActionTypes('UPDATE_USER');
export const DELETE_USER = createActionTypes('DELETE_USER');
export const LIST_USER = createActionTypes('LIST_USER');

export const sagaActions = {
    //request for screens take(action.type)
    addUser: {
        request: user => createAction(ADD_USER.REQUEST, {user}),
        success: (user, response) => createAction(ADD_USER.SUCCESS, {user, response}),
        failure: (user, error) => createAction(ADD_USER.FAILURE, {user, error}),
    },
    getUser: {
        request: id => createAction(GET_USER.REQUEST, {id}),
        success: (user, response) => createAction(GET_USER.SUCCESS, {user, response}),
        failure: (id, error) => createAction(GET_USER.FAILURE, {id, error}),
    },
    updateUser: {
        request: user => createAction(UPDATE_USER.REQUEST, {user}),
        success: (user, response) => createAction(UPDATE_USER.SUCCESS, {user, response}),
        failure: (user, error) => createAction(UPDATE_USER.FAILURE, {user, error}),
    },
    deleteUser: {
        request: id => createAction(DELETE_USER.REQUEST, {id}),
        success: (user, response) => createAction(DELETE_USER.SUCCESS, {user, response}),
        failure: (id, error) => createAction(DELETE_USER.FAILURE, {id, error}),
    },
    listUser: {
        request: () => createAction(LIST_USER.REQUEST),
        success: (users, response) => createAction(LIST_USER.SUCCESS, {users, response}),
        failure: (id, error) => createAction(LIST_USER.FAILURE, {id, error}),
    },
}







