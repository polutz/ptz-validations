'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.required = exports.requiredWithError = undefined;

var _ptzFp = require('ptz-fp');

var P = _interopRequireWildcard(_ptzFp);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var requiredWithError = exports.requiredWithError = _ramda2.default.curry(function (errorMessage, propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    return P.isNilOrEmpty(propValue) ? (0, _error.addError)(obj, propName, errorMessage) : obj;
});
var required = exports.required = requiredWithError(_allErrors2.default.REQUIRED);
//# sourceMappingURL=required.js.map
//# sourceMappingURL=required.js.map