'use strict'
import React, { Element } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './app'

import Drawer from '../containers/Drawer';
import StatusBar from '../containers/StatusBar';

const getSceneStyle = () => ({
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 4 },
    //shadowOpacity: 0.5,
    //shadowRadius: 3,
})

export default (): Element => (
    <Drawer>
        <StatusBar/>
        <Router scenes={scenes} getSceneStyle={getSceneStyle}/>
    </Drawer>
)