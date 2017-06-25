'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDate = exports.isDateWithError = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validate Date.
 */
var isDateWithError = exports.isDateWithError = _ramda2.default.curry(function (errorMsg, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    if (_ramda2.default.isNil(propValue)) return obj;
    // tslint:disable-next-line:no-string-literal
    if (Object.prototype.toString.call(propValue) === '[object Date]') return obj;
    if (typeof propValue === 'number') return (0, _error.addError)(obj, propName, errorMsg);
    var date = new Date(propValue);
    if (date.toString() === 'Invalid Date') return (0, _error.addError)(obj, propName, errorMsg);else return _ramda2.default.assoc(propName, date, obj);
});
/**
 * Validate Date.
 */
var isDate = exports.isDate = isDateWithError(_allErrors2.default.INVALID_DATE_ERROR);
//# sourceMappingURL=isDate.js.map
//# sourceMappingURL=isDate.js.map