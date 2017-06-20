'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateNumber = exports.isValidNumber = undefined;

var _ptzFp = require('ptz-fp');

var P = _interopRequireWildcard(_ptzFp);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Checks if an number is valid.
 */
var isValidNumber = exports.isValidNumber = function isValidNumber(propValue) {
    return typeof propValue === 'number';
};
/**
 * Validate Number
 */
var validateNumber = exports.validateNumber = _ramda2.default.curry(function (opts, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    var addError = (0, _error.addError)(obj, propName);
    if (P.isNilOrEmpty(propValue)) return opts.required ? addError(opts.requiredError || _allErrors2.default.REQUIRED) : obj;
    if (propValue > opts.max) return addError(opts.maxError || _allErrors2.default.MAX_LENGTH);
    if (propValue < opts.min) return addError(opts.minError || _allErrors2.default.MIN_LENGTH);
    return isValidNumber(propValue) ? obj : addError(opts.invalidNumberError || _allErrors2.default.INVALID_NUMBER_ERROR);
});
//# sourceMappingURL=validateNumber.js.map
//# sourceMappingURL=validateNumber.js.map