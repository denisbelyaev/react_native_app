import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, Text, AsyncStorage, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import { viewActions } from '../store/modules/actions';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //this.props.actions.loadUserPage(this.props.login);
    }

    render() {
        return (
          <Text>Welcome</Text>
        );
    }
}


function bindAction(dispatch) {
    return {
        actions: bindActionCreators(viewActions, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        users: users
    }
}

export default connect()(Welcome);
