'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('validate', function () {
    it('invalid user', function () {
        var createUser = V.validate({
            userName: V.validateString({
                required: true,
                minLength: 3,
                maxLength: 30
            })
        });
        var user = createUser({});
        var error = { propName: 'userName', errorMsg: V.allErrors.REQUIRED };
        assert.ok(V.containsError(error, user.errors));
    });
    it('valid user', function () {
        var createUser = V.validate({
            userName: V.validateString({
                required: true,
                minLength: 3,
                maxLength: 30
            })
        });
        var user = createUser({ userName: 'angeloocana' });
        assert.emptyArray(user.errors);
    });
});
//# sourceMappingURL=validate.test.js.map
//# sourceMappingURL=validate.test.js.map