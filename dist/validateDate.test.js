'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('validateDate', function () {
    describe('required', function () {
        describe('null', function () {
            it('add default error msg when null', function () {
                var propName = 'birthday';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, null);
                var validatedObj = V.validateDate(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'birthday';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, null);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateDate(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('undefined', function () {
            it('add default error msg when undefined', function () {
                var propName = 'birthday';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var validatedObj = V.validateDate(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when undefined', function () {
                var propName = 'birthday';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateDate(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('empty', function () {
            it('add default error msg when null', function () {
                var propName = 'birthday';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, '');
                var validatedObj = V.validateDate(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'birthday';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, '');
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateDate(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        it('do NOT add error when valid date', function () {
            var propName = 'birthday';
            var propValidation = {
                required: true
            };
            var objToValidate = _defineProperty({}, propName, '1992-06-28');
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('min', function () {
        it('add default min error when smaller than min', function () {
            var propName = 'birthday';
            var propValidation = {
                min: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-10'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom min error when smaller than min', function () {
            var propName = 'birthday';
            var propValidation = {
                min: new Date('2017-06-20'),
                minError: 'CUSTOM_MIN_LENGTH_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-10'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.minError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add min error when equal than min', function () {
            var propName = 'birthday';
            var propValidation = {
                min: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-20'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add min error when grater than min', function () {
            var propName = 'birthday';
            var propValidation = {
                min: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-30'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add min error when null and not required', function () {
            var propName = 'birthday';
            var propValidation = {
                required: false,
                min: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('max', function () {
        it('add default max error when grater than max', function () {
            var propName = 'birthday';
            var propValidation = {
                max: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-30'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom max error when grater than max', function () {
            var propName = 'birthday';
            var propValidation = {
                max: new Date('2017-06-20'),
                maxError: 'CUSTOM_MAX_LENGTH_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-30'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.maxError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do not add max error when equal than max', function () {
            var propName = 'birthday';
            var propValidation = {
                max: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-20'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add max error when smaller than max', function () {
            var propName = 'birthday';
            var propValidation = {
                max: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, new Date('2017-06-10'));
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add max error when null and not required', function () {
            var propName = 'birthday';
            var propValidation = {
                required: false,
                max: new Date('2017-06-20')
            };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.validateDate(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
//# sourceMappingURL=validateDate.test.js.map
//# sourceMappingURL=validateDate.test.js.map