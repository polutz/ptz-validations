import * as assert from 'ptz-assert';
import * as V from './index';
describe('min', () => {
    const propName = 'age';
    const error = { propName, errorMsg: V.allErrors.MIN };
    it('null', () => {
        const objToValidate = {
            [propName]: null
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('undefined', () => {
        const objToValidate = {
            [propName]: undefined
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> string', () => {
        const objToValidate = {
            [propName]: 'a'
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< string', () => {
        const objToValidate = {
            [propName]: 'angeloocana'
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= string', () => {
        const objToValidate = {
            [propName]: 'ang'
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> array', () => {
        const objToValidate = {
            [propName]: [1]
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< array', () => {
        const objToValidate = {
            [propName]: [1, 2, 3, 4, 5]
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= array', () => {
        const objToValidate = {
            [propName]: [1, 2, 3]
        };
        const validatedObj = V.min(3, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> date', () => {
        const objToValidate = {
            [propName]: new Date('2017-06-01')
        };
        const validatedObj = V.min(new Date('2017-06-02'), propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< date', () => {
        const objToValidate = {
            [propName]: new Date('2017-06-02')
        };
        const validatedObj = V.min(new Date('2017-06-01'), propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= date', () => {
        const objToValidate = {
            [propName]: new Date('1992-06-28')
        };
        const validatedObj = V.min(new Date('1992-06-28'), propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('> number', () => {
        const objToValidate = {
            [propName]: 1
        };
        const validatedObj = V.min(2, propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('< number', () => {
        const objToValidate = {
            [propName]: 2
        };
        const validatedObj = V.min(1, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('= number', () => {
        const objToValidate = {
            [propName]: 1
        };
        const validatedObj = V.min(1, propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=min.test.js.map