'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('validateNumber', function () {
    describe('isValidNumber', function () {
        it('Valid Number', function () {
            assert.ok(V.isValidNumber(10));
        });
        it('Invalid Number', function () {
            assert.notOk(V.isValidNumber('10'));
        });
    });
    describe('required', function () {
        describe('null', function () {
            it('add default error msg when null', function () {
                var propName = 'age';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, null);
                var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'age';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, null);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('undefined', function () {
            it('add default error msg when undefined', function () {
                var propName = 'age';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when undefined', function () {
                var propName = 'age';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        it('do NOT add error when not empty', function () {
            var propName = 'age';
            var propValidation = {
                required: true
            };
            var objToValidate = _defineProperty({}, propName, 25);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('min', function () {
        it('add default min error when less than min', function () {
            var propName = 'age';
            var propValidation = {
                min: 3
            };
            var objToValidate = _defineProperty({}, propName, 4);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('add custom min error when less than min', function () {
            var propName = 'age';
            var propValidation = {
                min: 3,
                minError: 'CUSTOM_MIN_LENGTH_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, 1);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.minError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add min error when equal than min', function () {
            var propName = 'age';
            var propValidation = {
                min: 3
            };
            var objToValidate = _defineProperty({}, propName, 3);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add min error when grater than min', function () {
            var propName = 'age';
            var propValidation = {
                min: 3
            };
            var objToValidate = _defineProperty({}, propName, 4);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add min error when null and not required', function () {
            var propName = 'age';
            var propValidation = {
                required: false,
                min: 3
            };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('max', function () {
        it('add default max error when grater than max', function () {
            var propName = 'age';
            var propValidation = {
                max: 3
            };
            var objToValidate = _defineProperty({}, propName, 4);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom max error when grater than max', function () {
            var propName = 'age';
            var propValidation = {
                max: 3,
                maxError: 'CUSTOM_MAX_LENGTH_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, 4);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.maxError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do not add max error when equal than max', function () {
            var propName = 'age';
            var propValidation = {
                max: 3
            };
            var objToValidate = _defineProperty({}, propName, 3);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add max error when less than max', function () {
            var propName = 'age';
            var propValidation = {
                max: 3
            };
            var objToValidate = _defineProperty({}, propName, 2);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add max error when null and not required', function () {
            var propName = 'age';
            var propValidation = {
                required: false,
                max: 3
            };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    it('add default error when invalid number', function () {
        var propName = 'age';
        var propValidation = {
            required: false
        };
        var objToValidate = { age: '10' };
        var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
        var error = { propName: propName, errorMsg: V.allErrors.INVALID_NUMBER_ERROR };
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('add custom error when invalid number', function () {
        var propName = 'age';
        var propValidation = {
            required: false,
            invalidNumberError: 'CUSTOM_INVALID_NUMBER_ERROR'
        };
        var objToValidate = { age: '10' };
        var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
        var error = { propName: propName, errorMsg: propValidation.invalidNumberError };
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('do NOT add error when valid number', function () {
        var propName = 'age';
        var propValidation = {
            required: false
        };
        var objToValidate = { age: 25 };
        var validatedObj = V.validateNumber(propValidation, propName, objToValidate);
        var error = { propName: propName, errorMsg: V.allErrors.INVALID_NUMBER_ERROR };
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=validateNumber.test.js.map
//# sourceMappingURL=validateNumber.test.js.map