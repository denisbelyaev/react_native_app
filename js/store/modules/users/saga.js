'use strict'
import { takeEvery, takeLatest, take, put, call, fork, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './services';

// each entity defines 3 creators { request, success, failure }
const { addUser, getUser, updateUser, deleteUser, listUser } = actions.sagaActions;

function* dispatchSagaActions(entity, apiFn) {
    //if entity not save or other error, catch error in services "fetch"
    try {
        const response = yield call(apiFn);
        yield put(entity.success(...response));
    } catch (error) {
        yield put(entity.failure(...error));
    }
}

export default function* userSaga() {
    yield takeLatest(actions.ADD_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, listUser, api.listUser(action));
        }
    );
    yield takeLatest(actions.GET_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, listUser, api.listUser(action));
        }
    );
    yield takeLatest(actions.UPDATE_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, listUser, api.listUser(action));
        }
    );
    yield takeLatest(actions.DELETE_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, listUser, api.listUser(action));
        }
    );
    yield takeLatest(actions.LIST_USER.REQUEST,
        function* (action) {
            console.log("============================");
            yield call(dispatchSagaActions, listUser, api.listUser(action));
        }
    );
}

