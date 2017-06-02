'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateEmail = exports.isValidEmail = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

var _validateString = require('./validateString');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if an E-mail is valid.
 */
var isValidEmail = exports.isValidEmail = _ramda2.default.test(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // tslint:disable-line:max-line-length
/**
 * Validate an E-mail prop of an object.
 */
// tslint:disable-line:max-line-length
var validateEmail = exports.validateEmail = _ramda2.default.curry(function (opts, propName, obj) {
    var stringOpts = {
        required: opts.required,
        requiredError: opts.requiredError,
        toLowerCase: true
    };
    obj = (0, _validateString.validateString)(stringOpts, propName, obj);
    var propValue = _ramda2.default.prop(propName, obj);
    return isValidEmail(propValue) ? obj : (0, _error.addError)(obj, propName, opts.invalidEmailError || _allErrors2.default.INVALID_EMAIL);
});
//# sourceMappingURL=validateEmail.js.map
//# sourceMappingURL=validateEmail.js.map