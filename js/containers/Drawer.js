
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { BackAndroid, Navigator, StatusBar, AsyncStorage, Text } from 'react-native';
import { closeDrawer } from '../store/modules/drawer/actions';
import SideMenu from './SideMenu';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst} from 'react-native-router-flux';
import styles from './styles';

const drawerStyle  = { shadowColor: '#fff', shadowOpacity: 0, shadowRadius: 5};

class AppNavigator extends Component {

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    closeDrawer() {
        this._drawer._root.close();
        this.props.closeDrawer();
    }
    openDrawer() {
        this._drawer._root.open()
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={ <SideMenu _drawer={this._drawer}/> }
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.3}
                panCloseMask={0.2}
                negotiatePan={true}
                style={styles.sidebar}
                >
                {this.props.children}
            </Drawer>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
    }
}

const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
