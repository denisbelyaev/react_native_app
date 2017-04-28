Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = babelHelpers.interopRequireDefault(_hoistNonReactStatics);

var _lodash = require('lodash');

var _ = babelHelpers.interopRequireWildcard(_lodash);

var _normalizeStyle = require('./StyleNormalizer/normalizeStyle');

var _normalizeStyle2 = babelHelpers.interopRequireDefault(_normalizeStyle);

var _Theme = require('./Theme');

var _Theme2 = babelHelpers.interopRequireDefault(_Theme);

var _resolveComponentStyle = require('./resolveComponentStyle');

function throwConnectStyleError(errorMessage, componentDisplayName) {
  throw Error(errorMessage + ' - when connecting ' + componentDisplayName + ' component to style.');
}

function getTheme(context) {
  return context.theme || _Theme2.default.getDefaultTheme();
}

exports.default = function (componentStyleName) {
  var componentStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var mapPropsToStyleNames = arguments[2];
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  function getComponentDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrapWithStyledComponent(WrappedComponent) {
    var componentDisplayName = getComponentDisplayName(WrappedComponent);

    if (!_.isPlainObject(componentStyle)) {
      throwConnectStyleError('Component style must be plain object', componentDisplayName);
    }

    if (!_.isString(componentStyleName)) {
      throwConnectStyleError('Component Style Name must be string', componentDisplayName);
    }

    var StyledComponent = function (_React$Component) {
      babelHelpers.inherits(StyledComponent, _React$Component);

      function StyledComponent(props, context) {
        babelHelpers.classCallCheck(this, StyledComponent);

        var _this = babelHelpers.possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call(this, props, context));

        var styleNames = _this.resolveStyleNames(props);
        var resolvedStyle = _this.resolveStyle(context, props, styleNames);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        _this.resolveConnectedComponentStyle = _this.resolveConnectedComponentStyle.bind(_this);
        _this.state = {
          style: resolvedStyle.componentStyle,
          childrenStyle: resolvedStyle.childrenStyle,

          addedProps: _this.resolveAddedProps(),
          styleNames: styleNames
        };
        return _this;
      }

      babelHelpers.createClass(StyledComponent, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            parentStyle: this.props.virtual ? this.context.parentStyle : this.state.childrenStyle,
            resolveStyle: this.resolveConnectedComponentStyle
          };
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
          var styleNames = this.resolveStyleNames(nextProps);
          if (this.shouldRebuildStyle(nextProps, nextContext, styleNames)) {
            var resolvedStyle = this.resolveStyle(nextContext, nextProps, styleNames);
            this.setState({
              style: resolvedStyle.componentStyle,
              childrenStyle: resolvedStyle.childrenStyle,
              styleNames: styleNames
            });
          }
        }
      }, {
        key: 'setNativeProps',
        value: function setNativeProps(nativeProps) {
          if (this.wrappedInstance.setNativeProps) {
            this.wrappedInstance.setNativeProps(nativeProps);
          }
        }
      }, {
        key: 'setWrappedInstance',
        value: function setWrappedInstance(component) {
          if (component && component._root) {
            this._root = component._root;
          } else {
            this._root = component;
          }
        }
      }, {
        key: 'hasStyleNameChanged',
        value: function hasStyleNameChanged(nextProps, styleNames) {
          return mapPropsToStyleNames && this.props !== nextProps && !_.isEqual(this.state.styleNames, styleNames);
        }
      }, {
        key: 'shouldRebuildStyle',
        value: function shouldRebuildStyle(nextProps, nextContext, styleNames) {
          return nextProps.style !== this.props.style || nextProps.styleName !== this.props.styleName || nextContext.theme !== this.context.theme || nextContext.parentStyle !== this.context.parentStyle || this.hasStyleNameChanged(nextProps, styleNames);
        }
      }, {
        key: 'resolveStyleNames',
        value: function resolveStyleNames(props) {
          var styleName = props.styleName;

          var styleNames = styleName ? styleName.split(/\s/g) : [];

          if (!mapPropsToStyleNames) {
            return styleNames;
          }

          return _.uniq(mapPropsToStyleNames(styleNames, props));
        }
      }, {
        key: 'resolveAddedProps',
        value: function resolveAddedProps() {
          var addedProps = {};
          if (options.withRef) {
            addedProps.ref = 'wrappedInstance';
          }
          return addedProps;
        }
      }, {
        key: 'resolveStyle',
        value: function resolveStyle(context, props, styleNames) {
          var parentStyle = context.parentStyle;

          var style = (0, _normalizeStyle2.default)(props.style);

          var theme = getTheme(context);
          var themeStyle = theme.createComponentStyle(componentStyleName, componentStyle);

          return (0, _resolveComponentStyle.resolveComponentStyle)(componentStyleName, styleNames, themeStyle, parentStyle, style);
        }
      }, {
        key: 'resolveConnectedComponentStyle',
        value: function resolveConnectedComponentStyle(props) {
          var styleNames = this.resolveStyleNames(props);
          return this.resolveStyle(this.context, props, styleNames).componentStyle;
        }
      }, {
        key: 'render',
        value: function render() {
          var _state = this.state,
              addedProps = _state.addedProps,
              style = _state.style;

          return _react2.default.createElement(WrappedComponent, babelHelpers.extends({}, this.props, addedProps, {
            style: style,
            ref: this.setWrappedInstance
          }));
        }
      }]);
      return StyledComponent;
    }(_react2.default.Component);

    StyledComponent.contextTypes = {
      theme: _Theme.ThemeShape,

      parentStyle: _react.PropTypes.object
    };
    StyledComponent.childContextTypes = {
      parentStyle: _react.PropTypes.object,
      resolveStyle: _react.PropTypes.func
    };
    StyledComponent.propTypes = {
      style: _react.PropTypes.object,

      styleName: _react.PropTypes.string,

      virtual: _react.PropTypes.bool
    };
    StyledComponent.defaultProps = {
      virtual: options.virtual
    };
    StyledComponent.displayName = 'Styled(' + componentDisplayName + ')';
    StyledComponent.WrappedComponent = WrappedComponent;


    return (0, _hoistNonReactStatics2.default)(StyledComponent, WrappedComponent);
  };
};