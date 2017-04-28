Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _connectStyle = require('../src/connectStyle');

var _connectStyle2 = babelHelpers.interopRequireDefault(_connectStyle);

var _StyleProvider = require('../src/StyleProvider');

var _StyleProvider2 = babelHelpers.interopRequireDefault(_StyleProvider);

var _resolveIncludes = require('../src/resolveIncludes');

var _reactNative = require('react-native');

var theme = function theme() {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    circle: {
      width: variables.circleRadius,
      height: variables.circleRadius,
      borderRadius: variables.circleRadius,
      backgroundColor: '#fff'
    },
    'developer.project.screen': {
      'developer.project.view': {

        'developer.project.view': {
          '.nestedCircle': babelHelpers.defineProperty({}, _resolveIncludes.INCLUDE, ['circle'])
        },

        '.square': {
          marginTop: 10,
          width: variables.squareSize,
          height: variables.squareSize,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center'
        },

        '.circle': babelHelpers.defineProperty({}, _resolveIncludes.INCLUDE, ['circle'])
      },
      container: {
        marginTop: 50,
        alignItems: 'center',
        flex: 1
      },
      title: {
        color: variables.color,
        fontSize: variables.fontSize
      },
      input: {
        width: 100,
        height: 50,
        backgroundColor: 'red'
      }
    }
  };
};

var Shapes = function (_React$Component) {
  babelHelpers.inherits(Shapes, _React$Component);

  function Shapes(props, context) {
    babelHelpers.classCallCheck(this, Shapes);

    var _this = babelHelpers.possibleConstructorReturn(this, (Shapes.__proto__ || Object.getPrototypeOf(Shapes)).call(this, props, context));

    _this.updateThemeVariable = _this.updateThemeVariable.bind(_this);

    var themeVariables = babelHelpers.extends({
      color: 'navy',
      fontSize: 18,
      squareSize: 250,
      circleRadius: 100
    }, props.themeVariables);

    _this.state = {
      themeVariables: themeVariables
    };
    return _this;
  }

  babelHelpers.createClass(Shapes, [{
    key: 'updateThemeVariable',
    value: function updateThemeVariable(key, val) {
      var themeVariables = babelHelpers.extends({}, this.state.themeVariables, babelHelpers.defineProperty({}, key, val));
      this.setState({ themeVariables: themeVariables });
    }
  }, {
    key: 'resolveTheme',
    value: function resolveTheme(themeVariables) {
      return theme(themeVariables);
    }
  }, {
    key: 'render',
    value: function render() {
      var themeVariables = this.state.themeVariables;

      return _react2.default.createElement(
        _StyleProvider2.default,
        { style: this.resolveTheme(themeVariables) },
        _react2.default.createElement(StyledScreen, { style: this.props.screenStyle })
      );
    }
  }]);
  return Shapes;
}(_react2.default.Component);

Shapes.propTypes = {
  themeVariables: _react2.default.PropTypes.object,
  screenStyle: _react2.default.PropTypes.object
};
Shapes.defaultProps = {
  themeVariables: {},
  screenStyle: {}
};
exports.default = Shapes;


function Screen(_ref) {
  var style = _ref.style;

  return _react2.default.createElement(
    StyledView,
    { style: style.container, virtual: true },
    _react2.default.createElement(
      _reactNative.Text,
      { style: style.title },
      'Theme Screen'
    ),
    _react2.default.createElement(
      StyledView,
      { styleName: 'square' },
      _react2.default.createElement(StyledView, { styleName: 'circle' }),
      _react2.default.createElement(StyledView, { styleName: 'nestedCircle' })
    ),
    _react2.default.createElement(
      StyledView,
      { styleName: 'square', virtual: true, style: { backgroundColor: 'navy' } },
      _react2.default.createElement(StyledView, { styleName: 'circle' })
    )
  );
}

Screen.propTypes = {
  style: _react2.default.PropTypes.object
};

var StyledScreen = (0, _connectStyle2.default)('developer.project.screen')(Screen);
var StyledView = (0, _connectStyle2.default)('developer.project.view')(_reactNative.View);