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
    console.log('validations \n', validations);
    console.log('obj \n', obj);
    return _ramda2.default.keys(validations).reduce(function (accObj, propName) {
        console.log('accObj \n', accObj);
        console.log('propName \n', propName);
        var newObj = validations[propName](propName, accObj);
        console.log('newObj \n', newObj);
        return newObj;
    }, obj);
});
//# sourceMappingURL=validate.js.map
//# sourceMappingURL=validate.js.map