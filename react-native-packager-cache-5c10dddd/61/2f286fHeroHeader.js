Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroHeader = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ZoomOut = require('./ZoomOut');

var _Parallax = require('./Parallax');

var _DriverShape = require('../drivers/DriverShape');

var HeroHeader = exports.HeroHeader = function (_Component) {
  babelHelpers.inherits(HeroHeader, _Component);

  function HeroHeader(props) {
    babelHelpers.classCallCheck(this, HeroHeader);

    var _this = babelHelpers.possibleConstructorReturn(this, (HeroHeader.__proto__ || Object.getPrototypeOf(HeroHeader)).call(this, props));

    _this.onLayout = _this.onLayout.bind(_this);
    _this.state = {
      height: 240
    };
    return _this;
  }

  babelHelpers.createClass(HeroHeader, [{
    key: 'onLayout',
    value: function onLayout(event) {
      var height = event.nativeEvent.layout.height;

      this.setState({ height: height });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children;


      return _react2.default.createElement(
        _reactNative.View,
        { onLayout: this.onLayout },
        _react2.default.createElement(
          _ZoomOut.ZoomOut,
          {
            driver: driver,
            inputRange: [-(0.9 * this.state.height), 0],
            maxFactor: 3
          },
          _react2.default.createElement(
            _Parallax.Parallax,
            {
              driver: driver,
              scrollSpeed: 0.5,
              insideScroll: true,
              header: true,
              extrapolation: { extrapolateLeft: 'clamp' }
            },
            children
          )
        )
      );
    }
  }]);
  return HeroHeader;
}(_react.Component);

HeroHeader.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react2.default.PropTypes.node
};