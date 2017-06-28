'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toLowerCase = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns a new object with some prop toLowerCase.
 */
var toLowerCase = exports.toLowerCase = _ramda2.default.curry(function (propName, obj) {
    var propValue = _ramda2.default.prop(propName, obj);
    if (propValue) return _ramda2.default.assoc(propName, propValue.toLowerCase(), obj);
    return obj;
});
//# sourceMappingURL=toLowerCase.js.map
//# sourceMappingURL=toLowerCase.js.map