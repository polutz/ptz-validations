'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = exports.isEmailWithError = exports.isValidEmail = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

var _isString = require('./isString');

var _toLowerCase = require('./toLowerCase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns true if an E-mail is valid.
 */
var isValidEmail = exports.isValidEmail = _ramda2.default.test(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // tslint:disable-line:max-line-length
/**
 * Validates E-mail prop of an object.
 *  - Checks if It is a string.
 *  - toLowerCase.
 *  - Checks if It is a valid E-mail.
 */
// tslint:disable-line:max-line-length
var isEmailWithError = exports.isEmailWithError = _ramda2.default.curry(function (errorMsg, propName, obj) {
  obj = (0, _isString.isStringWithError)(errorMsg, propName, obj);
  obj = (0, _toLowerCase.toLowerCase)(propName, obj);
  var propValue = _ramda2.default.prop(propName, obj);
  return isValidEmail(propValue) ? obj : (0, _error.addError)(obj, propName, errorMsg);
});
/**
 * Validates E-mail prop of an object.
 *  - Checks if It is a string.
 *  - toLowerCase.
 *  - Checks if It is a valid E-mail.
 */
var isEmail = exports.isEmail = isEmailWithError(_allErrors2.default.INVALID_EMAIL);
//# sourceMappingURL=isEmail.js.map
//# sourceMappingURL=isEmail.js.map