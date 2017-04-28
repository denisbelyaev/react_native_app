import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, Text, AsyncStorage, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Text onPress={Actions.BACK}>Options</Text>
        );
    }
}


function bindAction(dispatch) {
    return {
    }
}

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

export default connect()(Home);
