'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('validateEmail', function () {
    describe('isValidEmail', function () {
        it('Valid Email', function () {
            assert.ok(V.isValidEmail('angeloocana@gmail.com'));
        });
        it('Invalid Email', function () {
            assert.notOk(V.isValidEmail('angeloocana_gmail.com'));
        });
    });
    describe('validateEmail', function () {
        describe('required', function () {
            describe('null', function () {
                it('add default error msg when null', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true
                    };
                    var objToValidate = _defineProperty({}, propName, null);
                    var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                    var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                    assert.ok(V.containsError(error, validatedObj.errors));
                });
                it('add custom error msg when null', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };
                    var objToValidate = _defineProperty({}, propName, null);
                    var error = { propName: propName, errorMsg: propValidation.requiredError };
                    var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                    assert.ok(V.containsError(error, validatedObj.errors));
                });
            });
            describe('undefined', function () {
                it('add default error msg when undefined', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true
                    };
                    var objToValidate = _defineProperty({}, propName, undefined);
                    var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                    var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                    assert.ok(V.containsError(error, validatedObj.errors));
                });
                it('add custom error msg when undefined', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };
                    var objToValidate = _defineProperty({}, propName, undefined);
                    var error = { propName: propName, errorMsg: propValidation.requiredError };
                    var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                    assert.ok(V.containsError(error, validatedObj.errors));
                });
            });
            describe('empty', function () {
                it('add default error msg when null', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true
                    };
                    var objToValidate = _defineProperty({}, propName, '');
                    var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                    var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                    assert.ok(V.containsError(error, validatedObj.errors));
                });
                it('add custom error msg when null', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };
                    var objToValidate = _defineProperty({}, propName, '');
                    var error = { propName: propName, errorMsg: propValidation.requiredError };
                    var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                    assert.ok(V.containsError(error, validatedObj.errors));
                });
            });
            it('do NOT add error when not empty', function () {
                var propName = 'email';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, 'angeloocana');
                var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.notOk(V.containsError(error, validatedObj.errors));
            });
        });
        it('add error when invalid email', function () {
            var propName = 'email';
            var propValidation = {
                required: false
            };
            var objToValidate = { email: 'angeloocana_gmail_com' };
            var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.INVALID_EMAIL };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add error when valid email', function () {
            var propName = 'email';
            var propValidation = {
                required: false
            };
            var objToValidate = { email: 'angeloocana@gmail.com' };
            var validatedObj = V.validateEmail(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.INVALID_EMAIL };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
//# sourceMappingURL=validateEmail.test.js.map
//# sourceMappingURL=validateEmail.test.js.map