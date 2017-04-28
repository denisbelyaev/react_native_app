
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppNavigator = require('./AppNavigator');

var _AppNavigator2 = babelHelpers.interopRequireDefault(_AppNavigator);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var App = function (_Component) {
    babelHelpers.inherits(App, _Component);

    function App() {
        babelHelpers.classCallCheck(this, App);
        return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    babelHelpers.createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _reactNative.AppState.addEventListener('change', this.handleAppStateChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactNative.AppState.removeEventListener('change', this.handleAppStateChange);
        }
    }, {
        key: 'handleAppStateChange',
        value: function handleAppStateChange(state) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_AppNavigator2.default, { store: this.props.store });
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;