'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('max', function () {
    var propName = 'userName';
    var error = { propName: propName, errorMsg: V.allErrors.MAX };
    it('null', function () {
        var objToValidate = _defineProperty({}, propName, null);
        var validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('undefined', function () {
        var objToValidate = _defineProperty({}, propName, undefined);
        var validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> string', function () {
        var objToValidate = _defineProperty({}, propName, 'abcd');
        var validatedObj = V.max(3, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< string', function () {
        var objToValidate = _defineProperty({}, propName, 'ab');
        var validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= string', function () {
        var objToValidate = _defineProperty({}, propName, 'abc');
        var validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> array', function () {
        var objToValidate = _defineProperty({}, propName, [1, 2, 3, 4]);
        var validatedObj = V.max(3, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< array', function () {
        var objToValidate = _defineProperty({}, propName, [1, 2]);
        var validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= array', function () {
        var objToValidate = _defineProperty({}, propName, [1, 2, 3]);
        var validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> date', function () {
        var objToValidate = _defineProperty({}, propName, new Date('2017-06-02'));
        var validatedObj = V.max(new Date('2017-06-01'), propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< date', function () {
        var objToValidate = _defineProperty({}, propName, new Date('2017-06-01'));
        var validatedObj = V.max(new Date('2017-06-02'), propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= date', function () {
        var objToValidate = _defineProperty({}, propName, new Date('1992-06-28'));
        var validatedObj = V.max(new Date('1992-06-28'), propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> number', function () {
        var objToValidate = _defineProperty({}, propName, 2);
        var validatedObj = V.max(1, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< number', function () {
        var objToValidate = _defineProperty({}, propName, 1);
        var validatedObj = V.max(2, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= number', function () {
        var objToValidate = _defineProperty({}, propName, 1);
        var validatedObj = V.max(1, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=max.test.js.map
//# sourceMappingURL=max.test.js.map