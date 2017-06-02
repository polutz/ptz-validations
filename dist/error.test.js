'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('error', function () {
    describe('sameError', function () {
        it('equal', function () {
            var a = { propName: 'username', errorMsg: 'REQUIRED' };
            var b = { propName: 'username', errorMsg: 'REQUIRED' };
            assert.ok(V.sameError(a, b));
        });
        it('same propName and different errorMsg', function () {
            var a = { propName: 'username', errorMsg: 'REQUIRED' };
            var b = { propName: 'username', errorMsg: 'MAX_LENGTH' };
            assert.notOk(V.sameError(a, b));
        });
        it('different propName and same errorMsg', function () {
            var a = { propName: 'email', errorMsg: 'REQUIRED' };
            var b = { propName: 'username', errorMsg: 'REQUIRED' };
            assert.notOk(V.sameError(a, b));
        });
        it('NOT equal', function () {
            var a = { propName: 'email', errorMsg: 'REQUIRED' };
            var b = { propName: 'username', errorMsg: 'MAX_LENGTH' };
            assert.notOk(V.sameError(a, b));
        });
    });
    describe('containsError', function () {
        it('contains', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var errors = [{ propName: 'username', errorMsg: 'REQUIRED' }];
            assert.ok(V.containsError(error, errors));
        });
        it('NOT contains', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var errors = [];
            assert.notOk(V.containsError(error, errors));
        });
    });
    describe('addError', function () {
        it('return new obj when null obj', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var newObj = V.addError(null, error.propName, error.errorMsg);
            assert.ok(V.containsError(error, newObj.errors));
        });
        it('return new obj with error when errors is null', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var obj = { errors: null };
            var newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.ok(V.containsError(error, newObj.errors));
        });
        it('return new obj with error when errors is empty', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var obj = { errors: [] };
            var newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.ok(V.containsError(error, newObj.errors));
        });
        it('return obj when contains error', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var obj = { errors: [error] };
            var newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.equal(newObj, obj);
        });
        it('return new obj and concat error', function () {
            var error = { propName: 'username', errorMsg: 'REQUIRED' };
            var obj = {};
            var newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.notEqual(newObj, obj);
            assert.ok(V.containsError(error, newObj.errors));
        });
    });
});
//# sourceMappingURL=error.test.js.map
//# sourceMappingURL=error.test.js.map