'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

it('toUpperCase', function () {
    var propName = 'userName';
    var objToValidate = _defineProperty({}, propName, 'angeloocana');
    var validatedObj = V.toUpperCase(propName, objToValidate);
    assert.equal(validatedObj[propName], 'ANGELOOCANA');
});
//# sourceMappingURL=toUpperCase.test.js.map
//# sourceMappingURL=toUpperCase.test.js.map