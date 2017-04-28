Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveComponentStyle = resolveComponentStyle;

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

function isStyleVariant(propertyName) {
  return (/^\./.test(propertyName)
  );
}

function isChildStyle(propertyName) {
  return (/(^[^\.].*\.)|^\*$/.test(propertyName)
  );
}

function splitStyle(style) {
  return _lodash2.default.reduce(style, function (result, value, key) {
    var styleSection = result.componentStyle;
    if (isStyleVariant(key)) {
      styleSection = result.styleVariants;
    } else if (isChildStyle(key)) {
      styleSection = result.childrenStyle;
    }
    styleSection[key] = value;
    return result;
  }, {
    componentStyle: {},
    styleVariants: {},
    childrenStyle: {}
  });
}

function resolveComponentStyle(componentName) {
  var styleNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var themeStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var parentStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var elementStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var mergedStyle = _lodash2.default.merge.apply(_lodash2.default, [{}, themeStyle, parentStyle['*'], parentStyle[componentName]].concat(babelHelpers.toConsumableArray(_lodash2.default.map(styleNames, function (sn) {
    return themeStyle['.' + sn];
  })), babelHelpers.toConsumableArray(_lodash2.default.map(styleNames, function (sn) {
    return parentStyle['*.' + sn];
  })), babelHelpers.toConsumableArray(_lodash2.default.map(styleNames, function (sn) {
    return parentStyle[componentName + '.' + sn];
  })), [elementStyle]));

  var resolvedStyle = _lodash2.default.merge.apply(_lodash2.default, [{}, mergedStyle, parentStyle['*'], parentStyle[componentName]].concat(babelHelpers.toConsumableArray(_lodash2.default.map(styleNames, function (sn) {
    return mergedStyle['.' + sn];
  })), babelHelpers.toConsumableArray(_lodash2.default.map(styleNames, function (sn) {
    return parentStyle['*.' + sn];
  })), babelHelpers.toConsumableArray(_lodash2.default.map(styleNames, function (sn) {
    return parentStyle[componentName + '.' + sn];
  })), [elementStyle]));

  var _splitStyle = splitStyle(resolvedStyle),
      componentStyle = _splitStyle.componentStyle,
      childrenStyle = _splitStyle.childrenStyle;

  return {
    componentStyle: componentStyle,
    childrenStyle: childrenStyle
  };
}