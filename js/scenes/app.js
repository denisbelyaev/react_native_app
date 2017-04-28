'use strict'
import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import Login from '../containers/Login';
import Welcome from '../containers/Welcome';
import Options from '../containers/Options';
import Settings from '../containers/Settings';

const scenes = Actions.create(
    <Scene key="app" navigationBarStyle={{backgroundColor: 'white'}}>
        <Scene key="login" component={Login} title="Login"/>
        <Scene key="welcome" component={Welcome} title="Welcome"/>
        <Scene key="options" component={Options} title="Options"/>
        <Scene key="settings" component={Settings} title="Settings"/>
    </Scene>
)

export default scenes