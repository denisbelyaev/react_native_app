Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _nativeBase = require('native-base');

var _route = require('../actions/route');

var _Global = require('../Global');

var _Global2 = babelHelpers.interopRequireDefault(_Global);

var Home = function (_Component) {
    babelHelpers.inherits(Home, _Component);

    function Home(props) {
        babelHelpers.classCallCheck(this, Home);
        return babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    babelHelpers.createClass(Home, [{
        key: 'replaceRoute',
        value: function replaceRoute(route) {
            this.props.replaceRoute(route);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.Text,
                null,
                'Options'
            );
        }
    }]);
    return Home;
}(_react.Component);

function bindAction(dispatch) {
    return {
        replaceRoute: function replaceRoute(route) {
            return dispatch((0, _route.replaceRoute)(route));
        }
    };
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        route: state.route
    };
};

exports.default = (0, _reactRedux.connect)()(Home);