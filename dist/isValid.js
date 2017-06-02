'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = undefined;

var _ptzFp = require('ptz-fp');

var P = _interopRequireWildcard(_ptzFp);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Checks if prop errors is empty
 * @param {Object} o object with .errors
 */
var isValid = exports.isValid = _ramda2.default.compose(P.isNilOrEmpty, _ramda2.default.prop('errors'));
//# sourceMappingURL=isValid.js.map
//# sourceMappingURL=isValid.js.map