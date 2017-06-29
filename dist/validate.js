'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validate obj.
 */
var validate = exports.validate = _ramda2.default.curry(function (validations, obj) {
    if (!obj) throw new Error(_allErrors.allErrors.NULL_ARGS);
    return _ramda2.default.keys(validations).reduce(function (accObj, propName) {
        if (accObj) return validations[propName].reduce(function (accObj2, validation) {
            return validation(propName, accObj2);
        }, accObj);
    }, obj);
});
//# sourceMappingURL=validate.js.map
//# sourceMappingURL=validate.js.map