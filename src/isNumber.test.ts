import * as assert from 'ptz-assert';
import * as V from './index';

describe('isNumber', () => {
    const propName = 'age';
    const error = { propName, errorMsg: V.allErrors.INVALID_NUMBER_ERROR };

    it('string number', () => {
        const objToValidate = { [propName]: '10' };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });

    it('string', () => {
        const objToValidate = { [propName]: 'abc' };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.ok(V.containsError(error, validatedObj.errors));
    });

    it('number', () => {
        const objToValidate = { [propName]: 25 };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });

    it('date', () => {
        const objToValidate = { [propName]: new Date() };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.ok(V.containsError(error, validatedObj.errors));
    });

    it('array', () => {
        const objToValidate = { [propName]: ['abc'] };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.ok(V.containsError(error, validatedObj.errors));
    });

    it('null', () => {
        const objToValidate = { [propName]: null };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });

    it('undefined', () => {
        const objToValidate = { [propName]: undefined };

        const validatedObj = V.isNumber(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
