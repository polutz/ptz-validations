'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('isDate', function () {
    var propName = 'age';
    var error = { propName: propName, errorMsg: V.allErrors.INVALID_DATE_ERROR };
    it('string date', function () {
        var objToValidate = _defineProperty({}, propName, '1992-06-28');
        var validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('string', function () {
        var objToValidate = _defineProperty({}, propName, 'abc');
        var validatedObj = V.isDate(propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('number', function () {
        var objToValidate = _defineProperty({}, propName, 25);
        var validatedObj = V.isDate(propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('date', function () {
        var objToValidate = _defineProperty({}, propName, new Date());
        var validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('array', function () {
        var objToValidate = _defineProperty({}, propName, ['abc']);
        var validatedObj = V.isDate(propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('null', function () {
        var objToValidate = _defineProperty({}, propName, null);
        var validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('undefined', function () {
        var objToValidate = _defineProperty({}, propName, undefined);
        var validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=isDate.test.js.map
//# sourceMappingURL=isDate.test.js.map