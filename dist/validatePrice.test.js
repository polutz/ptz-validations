'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('validatePrice', function () {
    describe('invalidNumber', function () {
        it('add default invalidNumber error when is not a number', function () {
            var propName = 'price';
            var propValidation = {
                required: true
            };
            var objToValidate = _defineProperty({}, propName, 'notanumber');
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.INVALID_NUMBER_ERROR };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom invalidNumber error msg when is not a number', function () {
            var propName = 'price';
            var propValidation = {
                required: true,
                requiredError: 'CUSTOM_ERROR_MSG'
            };
            var objToValidate = _defineProperty({}, propName, null);
            var error = { propName: propName, errorMsg: propValidation.requiredError };
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });
    describe('required', function () {
        describe('null', function () {
            it('add default error msg when null', function () {
                var propName = 'price';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, null);
                var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'price';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, null);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('undefined', function () {
            it('add default error msg when undefined', function () {
                var propName = 'price';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when undefined', function () {
                var propName = 'price';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('empty', function () {
            it('add default error msg when null', function () {
                var propName = 'price';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, '');
                var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'price';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, '');
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        it('do NOT add error when not empty', function () {
            var propName = 'price';
            var propValidation = {
                required: true
            };
            var objToValidate = _defineProperty({}, propName, 10);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('canBeZero', function () {
        it('add default cannotBeZero error when equals zero', function () {
            var propName = 'price';
            var propValidation = {
                canBeZero: false
            };
            var objToValidate = _defineProperty({}, propName, 0);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('add custom cannotBeZero error when equals zero', function () {
            var propName = 'price';
            var propValidation = {
                canBeZero: false,
                cannotBeZeroError: 'CUSTOM_CANNOT_BE_ZERO_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, 0);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.cannotBeZeroError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeZero error when price is above ZERO', function () {
            var propName = 'price';
            var propValidation = {
                canBeZero: false
            };
            var objToValidate = _defineProperty({}, propName, 1);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.CANNOT_BE_ZERO };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeZero error if price can be ZERO ', function () {
            var propName = 'price';
            var propValidation = {
                canBeZero: true
            };
            var objToValidate = _defineProperty({}, propName, 0);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.CANNOT_BE_ZERO };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('canBeNegative', function () {
        it('add default cannotBeNegative error when price is negative', function () {
            var propName = 'price';
            var propValidation = {
                canBeNegative: false
            };
            var objToValidate = _defineProperty({}, propName, -1);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom cannotBeNegative error when price is negative', function () {
            var propName = 'price';
            var propValidation = {
                canBeNegative: false,
                cannotBeNegativeError: 'CUSTOM_CANNOT_BE_NEGATIVE_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, -1);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.cannotBeNegativeError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeNegative error when price is positive', function () {
            var propName = 'price';
            var propValidation = {
                canBeNegative: false
            };
            var objToValidate = _defineProperty({}, propName, 1);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeNegative error when price is zero', function () {
            var propName = 'price';
            var propValidation = {
                canBeNegative: false
            };
            var objToValidate = _defineProperty({}, propName, 0);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeNegative error when price can be negative', function () {
            var propName = 'price';
            var propValidation = {
                canBeNegative: true
            };
            var objToValidate = _defineProperty({}, propName, -10);
            var validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
//# sourceMappingURL=validatePrice.test.js.map
//# sourceMappingURL=validatePrice.test.js.map