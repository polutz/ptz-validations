'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isStringWithError = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validate String.
 */
var isStringWithError = exports.isStringWithError = _ramda2.default.curry(function (errorMsg, propName, obj) {
  var propValue = _ramda2.default.prop(propName, obj);
  if (_ramda2.default.isNil(propValue)) return obj;
  return typeof propValue === 'string' ? obj : (0, _error.addError)(obj, propName, errorMsg);
});
/**
 * Validate String.
 */
var isString = exports.isString = isStringWithError(_allErrors2.default.INVALID_NUMBER_ERROR);
//# sourceMappingURL=isString.js.map
//# sourceMappingURL=isString.js.map