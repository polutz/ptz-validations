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

function validateString(propValidation) {
    function validate(context) {
        if (context.errors == null) context.errors = [];
        if (propValidation.required && (context.data == null || context.data.length === 0)) {
            context.errors.push({
                propName: context.propName,
                errorMsg: propValidation.requiredError || _allErrors2.default.REQUIRED
            });
            return context;
        }
        if (context.data == null) return context;
        if (context.data.length < propValidation.minLength) context.errors.push({
            propName: context.propName,
            errorMsg: propValidation.minLengthError || _allErrors2.default.MIN_LENGTH
        });
        if (context.data.length > propValidation.maxLength) context.errors.push({
            propName: context.propName,
            errorMsg: propValidation.maxLengthError || _allErrors2.default.MAX_LENGTH
        });
        if (propValidation.toLowerCase) context.data = context.data.toLowerCase();
        if (propValidation.toUpperCase) context.data = context.data.toUpperCase();
        return context;
    }
    return {
        validate: validate,
        propValidation: propValidation
    };
}
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateEmail(propValidation) {
    function validate(context) {
        var stringValidation = {
            required: propValidation.required,
            requiredError: propValidation.requiredError,
            toLowerCase: true
        };
        context = validateString(stringValidation).validate(context);
        if (!isValidEmail(context.data)) context.errors.push({
            propName: context.propName,
            errorMsg: _allErrors2.default.INVALID_EMAIL
        });
        return context;
    }
    return {
        validate: validate,
        propValidation: propValidation
    };
}
//# sourceMappingURL=validate.js.map