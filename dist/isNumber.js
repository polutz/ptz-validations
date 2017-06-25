'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNumber = exports.isNumberWithError = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validate Number.
 */
var isNumberWithError = exports.isNumberWithError = _ramda2.default.curry(function (errorMsg, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    if (_ramda2.default.isNil(propValue) || typeof propValue === 'number') return obj;
    if (typeof propValue !== 'string') return (0, _error.addError)(obj, propName, errorMsg);
    var numPropValue = parseFloat(propValue);
    return isNaN(numPropValue) ? (0, _error.addError)(obj, propName, errorMsg) : _ramda2.default.assoc(propName, numPropValue, obj);
});
/**
 * Validate Number.
 */
var isNumber = exports.isNumber = isNumberWithError(_allErrors2.default.INVALID_NUMBER_ERROR);
//# sourceMappingURL=isNumber.js.map
//# sourceMappingURL=isNumber.js.map