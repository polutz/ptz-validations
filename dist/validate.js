'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validate obj.
 */
var validate = exports.validate = _ramda2.default.curry(function (validations, obj) {
    return _ramda2.default.keys(validations).reduce(function (accObj, propName) {
        return validations[propName](accObj);
    }, obj);
});
//# sourceMappingURL=validate.js.map
//# sourceMappingURL=validate.js.map