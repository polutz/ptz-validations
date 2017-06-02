'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addError = exports.containsError = exports.sameError = undefined;

var _ptzFp = require('ptz-fp');

var P = _interopRequireWildcard(_ptzFp);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Compares if to errors are the same.
 */
var sameError = exports.sameError = _ramda2.default.curry(function (a, b) {
    return a.propName === b.propName && a.errorMsg === b.errorMsg;
});
/**
 * Checks if a list of errors contains some error.
 * @param error
 * @param errors
 */
var containsError = exports.containsError = function containsError(error, errors) {
    return _ramda2.default.any(sameError(error), errors || []);
};
/**
 * Add error to obj.errors
 */
var addError = exports.addError = _ramda2.default.curry(function (obj, propName, errorMsg) {
    var error = { propName: propName, errorMsg: errorMsg };
    if (_ramda2.default.isNil(obj)) return { errors: [error] };
    if (P.isNilOrEmpty(obj.errors)) return _ramda2.default.assoc('errors', [error], obj);
    if (containsError(error, obj.errors)) return obj;
    var errors = obj.errors.concat(error);
    return _ramda2.default.assoc('errors', errors, obj);
});
//# sourceMappingURL=error.js.map
//# sourceMappingURL=error.js.map