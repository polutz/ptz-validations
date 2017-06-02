'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateString = undefined;

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
 * Validate String
 */
var validateString = exports.validateString = _ramda2.default.curry(function (opts, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    var addError = (0, _error.addError)(obj, propName);
    if (P.isNilOrEmpty(propValue)) return opts.required ? addError(opts.requiredError || _allErrors2.default.REQUIRED) : obj;
    if (propValue.length > opts.maxLength) return addError(opts.maxLengthError || _allErrors2.default.MAX_LENGTH);
    if (propValue.length < opts.minLength) return addError(opts.minLengthError || _allErrors2.default.MIN_LENGTH);
    if (opts.toLowerCase) return _ramda2.default.assoc(propName, propValue.toLowerCase(), obj);
    if (opts.toUpperCase) return _ramda2.default.assoc(propName, propValue.toUpperCase(), obj);
    return obj;
});
//# sourceMappingURL=validateString.js.map
//# sourceMappingURL=validateString.js.map