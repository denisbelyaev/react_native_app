
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.globalNav = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var _drawer = require('./actions/drawer');

var _route = require('./actions/route');

var _Global = require('./Global');

var _Global2 = babelHelpers.interopRequireDefault(_Global);

var _sideBar = require('./components/sideBar');

var _sideBar2 = babelHelpers.interopRequireDefault(_sideBar);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _Login = require('./containers/Login');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var _Welcome = require('./containers/Welcome');

var _Welcome2 = babelHelpers.interopRequireDefault(_Welcome);

var _Options = require('./containers/Options');

var _Options2 = babelHelpers.interopRequireDefault(_Options);

var _Settings = require('./containers/Settings');

var _Settings2 = babelHelpers.interopRequireDefault(_Settings);

var globalNav = exports.globalNav = {};

var searchResultRegexp = /^search\/(.*)$/;

var reducerCreate = function reducerCreate(params) {
    var defaultReducer = Reducer(params);
    return function (state, action) {
        var currentState = state;

        if (currentState) {
            while (currentState.children) {
                currentState = currentState.children[currentState.index];
            }
        }
        return defaultReducer(state, action);
    };
};

var drawerStyle = { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 };

var AppNavigator = function (_Component) {
    babelHelpers.inherits(AppNavigator, _Component);

    function AppNavigator(props) {
        babelHelpers.classCallCheck(this, AppNavigator);
        return babelHelpers.possibleConstructorReturn(this, (AppNavigator.__proto__ || Object.getPrototypeOf(AppNavigator)).call(this, props));
    }

    babelHelpers.createClass(AppNavigator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            globalNav.navigator = this._navigator;
            this.props.store.subscribe(function () {
                if (_this2.props.store.getState().drawer.drawerState == 'opened') _this2.openDrawer();

                if (_this2.props.store.getState().drawer.drawerState == 'closed') _this2._drawer._root.close();
            });

            _reactNative.BackAndroid.addEventListener('hardwareBackPress', function () {
                var routes = _this2._navigator.getCurrentRoutes();

                if (routes[routes.length - 1].id == 'login') {
                    _this2.replaceRoute('login');
                } else if (routes[routes.length - 1].id == 'login') {
                    _this2.replaceRoute('login');
                }

                return true;
            });
        }
    }, {
        key: 'popRoute',
        value: function popRoute() {
            this.props.popRoute();
        }
    }, {
        key: 'replaceRoute',
        value: function replaceRoute(route) {
            this.props.replaceRoute(route);
        }
    }, {
        key: 'closeDrawer',
        value: function closeDrawer() {
            if (this.props.store.getState().drawer.drawerState == 'opened') {
                this._drawer._root.close();
                this.props.closeDrawer();
            }
        }
    }, {
        key: 'openDrawer',
        value: function openDrawer() {
            this._drawer._root.open();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _nativeBase.Drawer,
                {
                    ref: function ref(_ref2) {
                        return _this3._drawer = _ref2;
                    },
                    type: 'overlay',
                    content: _react2.default.createElement(_sideBar2.default, { navigator: this._navigator }),
                    tapToClose: true,
                    acceptPan: false,
                    onClose: function onClose() {
                        return _this3.closeDrawer();
                    },
                    openDrawerOffset: 0.3,
                    panCloseMask: 0.2,
                    negotiatePan: true },
                _react2.default.createElement(_reactNative.StatusBar, {
                    hidden: true,
                    barStyle: 'light-content'
                }),
                _react2.default.createElement(_reactNative.Navigator, {
                    ref: function ref(_ref) {
                        return _this3._navigator = _ref;
                    },
                    configureScene: function configureScene(route) {
                        return babelHelpers.extends({}, _reactNative.Navigator.SceneConfigs.FloatFromRight, {
                            gestures: {}
                        });
                    },
                    initialRoute: { id: 'login' },
                    renderScene: this.renderScene
                })
            );
        }
    }, {
        key: 'renderScene',
        value: function renderScene(route, navigator) {
            switch (route.id) {
                case 'login':
                    return _react2.default.createElement(_Login2.default, { navigator: navigator });
                case 'welcome':
                    return _react2.default.createElement(_Welcome2.default, { navigator: navigator });
                case 'options':
                    return _react2.default.createElement(_Options2.default, { navigator: navigator });
                case 'settings':
                    return _react2.default.createElement(_Settings2.default, { navigator: navigator });
                default:
                    return _react2.default.createElement(_Login2.default, { navigator: navigator });
            }
        }
    }]);
    return AppNavigator;
}(_react.Component);

function bindAction(dispatch) {
    return {
        closeDrawer: function closeDrawer() {
            return dispatch((0, _drawer.closeDrawer)());
        },
        popRoute: function popRoute() {
            return dispatch((0, _route.popRoute)());
        },
        replaceRoute: function replaceRoute(route) {
            return dispatch((0, _route.replaceRoute)(route));
        }
    };
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        drawerState: state.drawer.drawerState
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(AppNavigator);