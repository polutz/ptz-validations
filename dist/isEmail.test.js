'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('isEmail', function () {
    describe('isValidEmail', function () {
        it('Valid Email', function () {
            assert.ok(V.isValidEmail('angeloocana@gmail.com'));
        });
        it('Invalid Email', function () {
            assert.notOk(V.isValidEmail('angeloocana_gmail.com'));
        });
    });
    describe('isEmail', function () {
        var propName = 'email';
        var error = { propName: propName, errorMsg: V.allErrors.INVALID_EMAIL };
        it('add error when invalid email', function () {
            var objToValidate = { email: 'angeloocana_gmail_com' };
            var validatedObj = V.isEmail(propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add error when valid email', function () {
            var objToValidate = { email: 'angeloocana@gmail.com' };
            var validatedObj = V.isEmail(propName, objToValidate);
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
//# sourceMappingURL=isEmail.test.js.map
//# sourceMappingURL=isEmail.test.js.map