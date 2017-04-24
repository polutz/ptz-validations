'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('ptz-validations', function () {
    describe('exports', function () {
        it('HaveValidation', function () {
            return (0, _ptzAssert.ok)(_index.HaveValidation);
        });
        it('validateEmail', function () {
            return (0, _ptzAssert.ok)(_index.validateEmail);
        });
    });
});
//# sourceMappingURL=index.test.js.map