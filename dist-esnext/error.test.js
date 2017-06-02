import * as assert from 'ptz-assert';
import * as V from './index';
describe('error', () => {
    describe('sameError', () => {
        it('equal', () => {
            const a = { propName: 'username', errorMsg: 'REQUIRED' };
            const b = { propName: 'username', errorMsg: 'REQUIRED' };
            assert.ok(V.sameError(a, b));
        });
        it('same propName and different errorMsg', () => {
            const a = { propName: 'username', errorMsg: 'REQUIRED' };
            const b = { propName: 'username', errorMsg: 'MAX_LENGTH' };
            assert.notOk(V.sameError(a, b));
        });
        it('different propName and same errorMsg', () => {
            const a = { propName: 'email', errorMsg: 'REQUIRED' };
            const b = { propName: 'username', errorMsg: 'REQUIRED' };
            assert.notOk(V.sameError(a, b));
        });
        it('NOT equal', () => {
            const a = { propName: 'email', errorMsg: 'REQUIRED' };
            const b = { propName: 'username', errorMsg: 'MAX_LENGTH' };
            assert.notOk(V.sameError(a, b));
        });
    });
    describe('containsError', () => {
        it('contains', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const errors = [{ propName: 'username', errorMsg: 'REQUIRED' }];
            assert.ok(V.containsError(error, errors));
        });
        it('NOT contains', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const errors = [];
            assert.notOk(V.containsError(error, errors));
        });
    });
    describe('addError', () => {
        it('return new obj when null obj', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const newObj = V.addError(null, error.propName, error.errorMsg);
            assert.ok(V.containsError(error, newObj.errors));
        });
        it('return new obj with error when errors is null', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const obj = { errors: null };
            const newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.ok(V.containsError(error, newObj.errors));
        });
        it('return new obj with error when errors is empty', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const obj = { errors: [] };
            const newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.ok(V.containsError(error, newObj.errors));
        });
        it('return obj when contains error', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const obj = { errors: [error] };
            const newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.equal(newObj, obj);
        });
        it('return new obj and concat error', () => {
            const error = { propName: 'username', errorMsg: 'REQUIRED' };
            const obj = {};
            const newObj = V.addError(obj, error.propName, error.errorMsg);
            assert.notEqual(newObj, obj);
            assert.ok(V.containsError(error, newObj.errors));
        });
    });
});
//# sourceMappingURL=error.test.js.map