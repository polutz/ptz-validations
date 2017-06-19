'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validatePrice = undefined;

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
 * Validate Price
 */
var validatePrice = exports.validatePrice = _ramda2.default.curry(function (opts, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    var addError = (0, _error.addError)(obj, propName);
    if (P.isNilOrEmpty(propValue)) return opts.required ? addError(opts.requiredError || _allErrors2.default.REQUIRED) : obj;
    if (!opts.canBeZero && parseInt(propValue, 10) === 0) return addError(opts.cannotBeZeroError || _allErrors2.default.CANNOT_BE_ZERO);
    if (!opts.canBeNegative && parseInt(propValue, 10) < 0) return addError(opts.cannotBeNegativeError || _allErrors2.default.CANNOT_BE_NEGATIVE);
    return obj;
});
//# sourceMappingURL=validatePrice.js.map
//# sourceMappingURL=validatePrice.js.map