
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _React = require('React');

var _React2 = babelHelpers.interopRequireDefault(_React);

var _App = require('./App');

var _App2 = babelHelpers.interopRequireDefault(_App);

var _configureStore = require('./configureStore');

var _configureStore2 = babelHelpers.interopRequireDefault(_configureStore);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _route = require('./actions/route');

var _Global = require('./Global');

var _Global2 = babelHelpers.interopRequireDefault(_Global);

function setup() {
    var Root = function (_Component) {
        babelHelpers.inherits(Root, _Component);

        function Root() {
            babelHelpers.classCallCheck(this, Root);

            var _this = babelHelpers.possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this));

            _this.state = {
                isLoading: false,
                store: (0, _configureStore2.default)(function (store) {
                    _this.setStoreData(store).then(function (token) {
                        var initRoute = token ? 'welcome' : 'login';
                        store.dispatch((0, _route.replaceRoute)(initRoute));
                    });
                    _this.setState({ isLoading: true });
                })
            };
            return _this;
        }

        babelHelpers.createClass(Root, [{
            key: 'setStoreData',
            value: function setStoreData(store) {
                return regeneratorRuntime.async(function setStoreData$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', true);

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, null, this);
            }
        }, {
            key: 'render',
            value: function render() {
                return _React2.default.createElement(
                    _reactRedux.Provider,
                    { store: this.state.store },
                    _React2.default.createElement(_App2.default, { store: this.state.store })
                );
            }
        }]);
        return Root;
    }(_React.Component);

    return Root;
}

exports.default = setup;