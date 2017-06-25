'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUpperCase = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns a new object with some prop toUpperCase.
 */
var toUpperCase = exports.toUpperCase = _ramda2.default.curry(function (propName, obj) {
  var propValue = _ramda2.default.prop(propName, obj);
  return _ramda2.default.assoc(propName, propValue.toUpperCase(), obj);
});
//# sourceMappingURL=toUpperCase.js.map
//# sourceMappingURL=toUpperCase.js.map