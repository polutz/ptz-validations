'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('ptz-validations', function () {
    it.only('createUser example', function () {
        var validateUser = V.validate({
            id: V.generateId,
            displayName: V.validateString({
                required: true,
                minLength: 2,
                maxLength: 100
            }),
            userName: V.validateString({
                required: true,
                minLength: 2,
                maxLength: 40,
                toLowerCase: true
            }),
            password: V.validateString({
                required: true,
                minLength: 6,
                maxLength: 40
            }),
            email: V.validateEmail({
                required: true
            }),
            weight: V.validateNumber({
                min: 1,
                max: 1000
            }),
            birthday: V.validateDate({
                min: new Date('1800-01-01'),
                max: new Date()
            })
        });
        var user = validateUser({
            userName: 'angeloocana',
            password: 'abcd',
            email: 'angeloocana@gmail.com',
            weight: 90,
            birthday: '1992-06-28'
        });
        var expectedUser = {
            id: 'hfk397d',
            userName: 'angeloocana',
            password: 'abcd',
            email: 'angeloocana@gmail.com',
            weight: 90,
            birthday: '1992-06-28',
            errors: [{
                propName: 'displayName',
                errorMsg: 'ERROR_REQUIRED'
            }, {
                propName: 'password',
                errorMsg: 'ERROR_MIN_LENGTH'
            }]
        };
        assert.ok(user.id, 'generate id');
        assert.equal(user.userName, expectedUser.userName, 'set userName');
        assert.equal(user.password, expectedUser.password, 'set password');
        assert.equal(user.email, expectedUser.email, 'set email');
        assert.equal(user.weight, expectedUser.weight, 'set weight');
        assert.equal(user.birthday, expectedUser.birthday, 'set birthday');
        assert.deepEqual(user.errors, expectedUser.errors, 'add errors');
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map