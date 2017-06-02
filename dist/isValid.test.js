'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('isValid', function () {
    it('should return true when errors is null', function () {
        var entity = { errors: null };
        assert.ok(V.isValid(entity));
    });
    it('should return true when error is empty', function () {
        var entity = { errors: [] };
        assert.ok(V.isValid(entity));
    });
    it('should return false when there are errors', function () {
        var entity = { errors: [{ errorMsg: 'ERROR_ANOTHER_ERROR' }] };
        assert.notOk(V.isValid(entity));
    });
});
//# sourceMappingURL=isValid.test.js.map
//# sourceMappingURL=isValid.test.js.map