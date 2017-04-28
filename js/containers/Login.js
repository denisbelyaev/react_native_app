import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, Text, AsyncStorage, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content } from 'native-base';
import { InputGroup, Input, Button, Icon, View, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { closeDrawer } from '../store/modules/drawer/actions';
import {LIST_USER} from '../store/modules/users/actions';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.welcome}>welcome!</Text>
                <Text onPress={() => Actions.refresh({id : 2})}>Refresh! {this.props.id}</Text>
                <Button onPress={this.props.listUser()}><Text>SAGA</Text></Button>
            </View>
        );
    }
}


function bindAction(dispatch) {
    return {
        listUser: ()=>dispatch({type: 'LIST_USER_REQUEST', payload: {}}),
        closeDrawer: ()=>dispatch(closeDrawer()),
    }
}

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

export default connect(null,bindAction)(Login);
