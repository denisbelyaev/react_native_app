import { fork, join } from 'redux-saga/effects';

import userSaga from './modules/users/saga';

//Composing Sagas
export default function* sagas() {
    yield [
        fork(userSaga),
    ];
}
