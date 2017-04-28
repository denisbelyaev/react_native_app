
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon } from 'native-base';
import { closeDrawer } from '../../store/modules/drawer/actions';
import {Actions} from 'react-native-router-flux';
import styles from "./../../containers/styles";

class SideBar extends Component {

    navigateTo(route) {
        //this.props._drawer._root.close();
        Actions.options;
    }

    render(){
        return (
            <Content>
                <List foregroundColor={"white"}>
                    <ListItem iconLeft onPress={this.props.closeDrawer} >
                        <Icon name="ios-laptop-outline" />
                        <Text>Back</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={this.navigateTo('options')} >
                        <Icon name="ios-laptop-outline" />
                        <Text>Options</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={Actions.settings} >
                        <Icon name="ios-settings-outline" />
                        <Text>Settings</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={Actions.welcome} >
                        <Icon name="ios-log-out-outline" />
                        <Text>welcome</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
    }
}

export default connect(null, bindAction)(SideBar);
