'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.min = exports.minWithError = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds error if prop is less than minValue.
 */
var minWithError = exports.minWithError = _ramda2.default.curry(function (errorMsg, minValue, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    if (_ramda2.default.isNil(propValue)) return obj;
    // tslint:disable-next-line:no-string-literal
    if (minValue > (propValue['length'] ? propValue.length : propValue)) return (0, _error.addError)(obj, propName, errorMsg);
    return obj;
});
var min = exports.min = minWithError(_allErrors2.default.MIN);
//# sourceMappingURL=min.js.map
//# sourceMappingURL=min.js.map