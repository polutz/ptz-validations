'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('validateString', function () {
    describe('required', function () {
        describe('null', function () {
            it('add default error msg when null', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, null);
                var validatedObj = V.validateString(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, null);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateString(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('undefined', function () {
            it('add default error msg when undefined', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var validatedObj = V.validateString(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when undefined', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, undefined);
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateString(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('empty', function () {
            it('add default error msg when null', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true
                };
                var objToValidate = _defineProperty({}, propName, '');
                var validatedObj = V.validateString(propValidation, propName, objToValidate);
                var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                var objToValidate = _defineProperty({}, propName, '');
                var error = { propName: propName, errorMsg: propValidation.requiredError };
                var validatedObj = V.validateString(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        it('do NOT add error when not empty', function () {
            var propName = 'userName';
            var propValidation = {
                required: true
            };
            var objToValidate = _defineProperty({}, propName, 'angeloocana');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('minLength', function () {
        it('add default minLength error when less than minLength', function () {
            var propName = 'userName';
            var propValidation = {
                minLength: 3
            };
            var objToValidate = _defineProperty({}, propName, 'angeloocana');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('add custom minLength error when less than minLength', function () {
            var propName = 'userName';
            var propValidation = {
                minLength: 3,
                minLengthError: 'CUSTOM_MIN_LENGTH_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, 'a');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.minLengthError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add minLength error when equal than minLength', function () {
            var propName = 'userName';
            var propValidation = {
                minLength: 3
            };
            var objToValidate = _defineProperty({}, propName, 'ang');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add minLength error when grater than minLength', function () {
            var propName = 'userName';
            var propValidation = {
                minLength: 3
            };
            var objToValidate = _defineProperty({}, propName, 'angeloocana');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add minLength error when null and not required', function () {
            var propName = 'userName';
            var propValidation = {
                required: false,
                minLength: 3
            };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('maxLength', function () {
        it('add default maxLength error when grater than maxLength', function () {
            var propName = 'userName';
            var propValidation = {
                maxLength: 3
            };
            var objToValidate = _defineProperty({}, propName, 'angeloocana');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom maxLength error when grater than maxLength', function () {
            var propName = 'userName';
            var propValidation = {
                maxLength: 3,
                maxLengthError: 'CUSTOM_MAX_LENGTH_ERROR'
            };
            var objToValidate = _defineProperty({}, propName, 'angeloocana');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: propValidation.maxLengthError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do not add maxLength error when equal than maxLength', function () {
            var propName = 'userName';
            var propValidation = {
                maxLength: 3
            };
            var objToValidate = _defineProperty({}, propName, 'ang');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add maxLength error when less than maxLength', function () {
            var propName = 'userName';
            var propValidation = {
                maxLength: 3
            };
            var objToValidate = _defineProperty({}, propName, 'an');
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add maxLength error when null and not required', function () {
            var propName = 'userName';
            var propValidation = {
                required: false,
                maxLength: 3
            };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.validateString(propValidation, propName, objToValidate);
            var error = { propName: propName, errorMsg: V.allErrors.MAX_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    it('toLowerCase', function () {
        var propName = 'userName';
        var propValidation = {
            toLowerCase: true
        };
        var objToValidate = _defineProperty({}, propName, 'ANGELOOCANA');
        var validatedObj = V.validateString(propValidation, propName, objToValidate);
        assert.equal(validatedObj[propName], 'angeloocana');
    });
    it('toUpperCase', function () {
        var propName = 'userName';
        var propValidation = {
            toUpperCase: true
        };
        var objToValidate = _defineProperty({}, propName, 'angeloocana');
        var validatedObj = V.validateString(propValidation, propName, objToValidate);
        assert.equal(validatedObj[propName], 'ANGELOOCANA');
    });
});
//# sourceMappingURL=validateString.test.js.map
//# sourceMappingURL=validateString.test.js.map