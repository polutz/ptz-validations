'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateString = validateString;

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
//# sourceMappingURL=validate.js.map