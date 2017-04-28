Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _nativeBase = require('native-base');

var _Global = require('../Global');

var _Global2 = babelHelpers.interopRequireDefault(_Global);

var Login = function (_Component) {
    babelHelpers.inherits(Login, _Component);

    function Login(props) {
        babelHelpers.classCallCheck(this, Login);
        return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    }

    babelHelpers.createClass(Login, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _nativeBase.Container,
                null,
                _react2.default.createElement(
                    _nativeBase.Content,
                    null,
                    _react2.default.createElement(
                        _reactNativeEasyGrid.Grid,
                        null,
                        _react2.default.createElement(
                            _reactNativeEasyGrid.Col,
                            { style: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } },
                            _react2.default.createElement(_reactNativeEasyGrid.Row, { style: { flex: 30 } }),
                            _react2.default.createElement(
                                _reactNativeEasyGrid.Row,
                                { style: { flex: 30, justifyContent: 'center' } },
                                _react2.default.createElement(
                                    _reactNative.Text,
                                    null,
                                    'Login'
                                )
                            ),
                            _react2.default.createElement(_reactNativeEasyGrid.Row, { style: { flex: 40 } })
                        )
                    )
                )
            );
        }
    }]);
    return Login;
}(_react.Component);

exports.default = (0, _reactRedux.connect)()(Login);