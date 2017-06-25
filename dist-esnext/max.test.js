import * as assert from 'ptz-assert';
import * as V from './index';
describe('max', () => {
    const propName = 'userName';
    const error = { propName, errorMsg: V.allErrors.MAX };
    it('null', () => {
        const objToValidate = {
            [propName]: null
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('undefined', () => {
        const objToValidate = {
            [propName]: undefined
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> string', () => {
        const objToValidate = {
            [propName]: 'abcd'
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< string', () => {
        const objToValidate = {
            [propName]: 'ab'
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= string', () => {
        const objToValidate = {
            [propName]: 'abc'
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> array', () => {
        const objToValidate = {
            [propName]: [1, 2, 3, 4]
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< array', () => {
        const objToValidate = {
            [propName]: [1, 2]
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= array', () => {
        const objToValidate = {
            [propName]: [1, 2, 3]
        };
        const validatedObj = V.max(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> date', () => {
        const objToValidate = {
            [propName]: new Date('2017-06-02')
        };
        const validatedObj = V.max(new Date('2017-06-01'), propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< date', () => {
        const objToValidate = {
            [propName]: new Date('2017-06-01')
        };
        const validatedObj = V.max(new Date('2017-06-02'), propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= date', () => {
        const objToValidate = {
            [propName]: new Date('1992-06-28')
        };
        const validatedObj = V.max(new Date('1992-06-28'), propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> number', () => {
        const objToValidate = {
            [propName]: 2
        };
        const validatedObj = V.max(1, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< number', () => {
        const objToValidate = {
            [propName]: 1
        };
        const validatedObj = V.max(2, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= number', () => {
        const objToValidate = {
            [propName]: 1
        };
        const validatedObj = V.max(1, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=max.test.js.map