'use strict'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store'
import Router from './scenes'

const App = () => (
    <Provider store={createStore()}>
        <Router />
    </Provider>
)

export default App