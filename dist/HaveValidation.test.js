'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('HaveValidation', function () {
    describe('addError', function () {
        it('do not throw error when args.errors is null', function () {
            var error = {
                errorMsg: 'ERROR_'
            };
            var entity = new _index.HaveValidation({ errors: null });
            entity.addError(error);
            (0, _ptzAssert.contains)(entity.errors, error);
        });
        it('add errors from args.errors', function () {
            var error = { errorMsg: 'ERROR_' };
            var errorArgs = { errorMsg: 'ERROR_ANOTHER_ERROR' };
            var entity = new _index.HaveValidation({ errors: [errorArgs] });
            entity.addError(error);
            (0, _ptzAssert.contains)(entity.errors, errorArgs);
            (0, _ptzAssert.contains)(entity.errors, error);
        });
        it('does not duplicate errors', function () {
            var error = { errorMsg: 'ERROR_' };
            var entity = new _index.HaveValidation({ errors: [error] });
            entity.addError(error);
            (0, _ptzAssert.containsNTimes)(entity.errors, error, 1);
        });
    });
    describe('addErrors', function () {
        it('add 2 errors', function () {
            var error1 = { errorMsg: 'ERROR_1' };
            var error2 = { errorMsg: 'ERROR_2' };
            var error3 = { errorMsg: 'ERROR_3' };
            var entity = new _index.HaveValidation({ errors: [error1] });
            entity.addErrors([error2, error3]);
            (0, _ptzAssert.contains)(entity.errors, error1, 'Error from args not added');
            (0, _ptzAssert.contains)(entity.errors, error2);
            (0, _ptzAssert.contains)(entity.errors, error3);
        });
        it('add no errors', function () {
            var entity = new _index.HaveValidation({});
            entity.addErrors(null);
            (0, _ptzAssert.emptyArray)(entity.errors);
        });
    });
    describe('IsValid', function () {
        it('should return true when errors is null', function () {
            var entity = new _index.HaveValidation({ errors: null });
            (0, _ptzAssert.ok)(entity.isValid());
        });
        it('should return true when error is empty', function () {
            var entity = new _index.HaveValidation({ errors: [] });
            (0, _ptzAssert.ok)(entity.isValid());
        });
        it('should return false when there are errors', function () {
            var entity = new _index.HaveValidation({ errors: [{ errorMsg: 'ERROR_ANOTHER_ERROR' }] });
            (0, _ptzAssert.notOk)(entity.isValid());
        });
    });
});
//# sourceMappingURL=HaveValidation.test.js.map
//# sourceMappingURL=HaveValidation.test.js.map