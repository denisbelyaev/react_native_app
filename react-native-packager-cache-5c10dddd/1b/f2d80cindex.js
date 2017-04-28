
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _drawer = require('../../actions/drawer');

var _route = require('../../actions/route');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var SideBar = function (_Component) {
    babelHelpers.inherits(SideBar, _Component);

    function SideBar() {
        babelHelpers.classCallCheck(this, SideBar);
        return babelHelpers.possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
    }

    babelHelpers.createClass(SideBar, [{
        key: 'navigateTo',
        value: function navigateTo(route) {
            this.props.closeDrawer();
            this.props.replaceOrPushRoute(route);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _nativeBase.Content,
                null,
                _react2.default.createElement(
                    _nativeBase.List,
                    { foregroundColor: "white" },
                    _react2.default.createElement(
                        _nativeBase.ListItem,
                        { iconLeft: true, onPress: function onPress() {
                                return _this2.navigateTo('options');
                            } },
                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-laptop-outline' }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            null,
                            'Options'
                        )
                    ),
                    _react2.default.createElement(
                        _nativeBase.ListItem,
                        { iconLeft: true, onPress: function onPress() {
                                return _this2.navigateTo('settings');
                            } },
                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-settings-outline' }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            null,
                            'Settings'
                        )
                    ),
                    _react2.default.createElement(
                        _nativeBase.ListItem,
                        { iconLeft: true, onPress: function onPress() {
                                return _this2.navigateTo('logout');
                            } },
                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-log-out-outline' }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            null,
                            ' Log Out'
                        )
                    )
                )
            );
        }
    }]);
    return SideBar;
}(_react.Component);

function bindAction(dispatch) {
    return {
        closeDrawer: function closeDrawer() {
            return dispatch((0, _drawer.closeDrawer)());
        },
        replaceOrPushRoute: function replaceOrPushRoute(route) {
            return dispatch((0, _route.replaceOrPushRoute)(route));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, bindAction)(SideBar);