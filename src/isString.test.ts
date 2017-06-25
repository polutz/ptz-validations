import * as assert from 'ptz-assert';
import * as V from './index';

describe('isString', () => {
    const propName = 'age';
    const error = { propName, errorMsg: V.allErrors.INVALID_NUMBER_ERROR };

    it('string', () => {
        const objToValidate = { [propName]: 'abc' };

        const validatedObj = V.isString(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });

    it('number', () => {
        const objToValidate = { [propName]: 25 };

        const validatedObj = V.isString(propName, objToValidate);

        assert.ok(V.containsError(error, validatedObj.errors));
    });

    it('date', () => {
        const objToValidate = { [propName]: new Date() };

        const validatedObj = V.isString(propName, objToValidate);

        assert.ok(V.containsError(error, validatedObj.errors));
    });

    it('array', () => {
        const objToValidate = { [propName]: ['abc'] };

        const validatedObj = V.isString(propName, objToValidate);

        assert.ok(V.containsError(error, validatedObj.errors));
    });

    it('null', () => {
        const objToValidate = { [propName]: null };

        const validatedObj = V.isString(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });

    it('undefined', () => {
        const objToValidate = { [propName]: undefined };

        const validatedObj = V.isString(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
