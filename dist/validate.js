'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateString = validateString;
exports.isValidEmail = isValidEmail;
exports.validateEmail = validateEmail;

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateString(args) {
    if (args.propValidation.required && (args.data == null || args.data.length === 0)) return [{
        propName: args.propName,
        errorMsg: args.propValidation.requiredError || _allErrors2.default.REQUIRED
    }];
    if (args.data == null) return [];
    if (args.data.length < args.propValidation.minLength) return [{
        propName: args.propName,
        errorMsg: args.propValidation.minLengthError || _allErrors2.default.MIN_LENGTH
    }];
    if (args.data.length > args.propValidation.maxLength) return [{
        propName: args.propName,
        errorMsg: args.propValidation.maxLengthError || _allErrors2.default.MAX_LENGTH
    }];
    return [];
}
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateEmail(args) {
    var errors = validateString(args);
    if (!isValidEmail(args.data)) errors.push({
        propName: args.propName,
        errorMsg: _allErrors2.default.INVALID_EMAIL
    });
    return errors;
}
//# sourceMappingURL=validate.js.map