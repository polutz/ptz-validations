import * as assert from 'ptz-assert';
import * as V from './index';
describe('isDate', () => {
    const propName = 'age';
    const error = { propName, errorMsg: V.allErrors.INVALID_DATE_ERROR };
    it('string date', () => {
        const objToValidate = { [propName]: '1992-06-28' };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('string', () => {
        const objToValidate = { [propName]: 'abc' };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('number', () => {
        const objToValidate = { [propName]: 25 };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('date', () => {
        const objToValidate = { [propName]: new Date() };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('array', () => {
        const objToValidate = { [propName]: ['abc'] };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.ok(V.containsError(error, validatedObj.errors));
    });
    it('null', () => {
        const objToValidate = { [propName]: null };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
    it('undefined', () => {
        const objToValidate = { [propName]: undefined };
        const validatedObj = V.isDate(propName, objToValidate);
        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
//# sourceMappingURL=isDate.test.js.map