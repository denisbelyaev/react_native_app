'use strict';
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
//import Reactotron from 'reactotron'
import sagas from './sagas'

import drawer from './modules/drawer/reducer'
import users from './modules/users/reducer'
var reducers = {drawer, users}
//import * as reducers from './reducers'

//Reactotron.connect({
//    enabled: __DEV__,
//})

export default function configureStore(initialState={}) {
    let sagaMiddleware = createSagaMiddleware()

    const enhancer = compose(
        applyMiddleware(
            sagaMiddleware,
            //Reactotron.reduxMiddleware
        )
    );

    let store = createStore(
        combineReducers({ ...reducers }),
        initialState,
        enhancer);
    persistStore(store, {storage: AsyncStorage});
    //Reactotron.addReduxStore(store)
    sagaMiddleware.run(sagas);
    //store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);//all Sagas blocked on a take Effect

    return store;
}
