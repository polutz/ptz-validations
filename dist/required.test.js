'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('required', function () {
    describe('null', function () {
        it('add default error msg when null', function () {
            var propName = 'userName';
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.required(propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom error msg when null', function () {
            var propName = 'userName';
            var errorMsg = 'CUSTOM_ERROR_MSG';
            var error = { propName: propName, errorMsg: errorMsg };
            var objToValidate = _defineProperty({}, propName, null);
            var validatedObj = V.requiredWithError(errorMsg, propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });
    describe('undefined', function () {
        it('add default error msg when undefined', function () {
            var propName = 'userName';
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            var objToValidate = _defineProperty({}, propName, undefined);
            var validatedObj = V.required(propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom error msg when undefined', function () {
            var propName = 'userName';
            var errorMsg = 'CUSTOM_ERROR_MSG';
            var error = { propName: propName, errorMsg: errorMsg };
            var objToValidate = _defineProperty({}, propName, undefined);
            var validatedObj = V.requiredWithError(errorMsg, propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });
    describe('empty', function () {
        it('add default error msg when null', function () {
            var propName = 'userName';
            var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
            var objToValidate = _defineProperty({}, propName, '');
            var validatedObj = V.required(propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom error msg when null', function () {
            var propName = 'userName';
            var errorMsg = 'CUSTOM_ERROR_MSG';
            var error = { propName: propName, errorMsg: errorMsg };
            var objToValidate = _defineProperty({}, propName, '');
            var validatedObj = V.requiredWithError(errorMsg, propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });
    it('do NOT add error when STRING not empty', function () {
        var propName = 'userName';
        var error = { propName: propName, errorMsg: V.allErrors.REQUIRED };
        var objToValidate = _defineProperty({}, propName, 'angeloocana');
        var validatedObj = V.required(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=required.test.js.map
//# sourceMappingURL=required.test.js.map