import * as assert from 'ptz-assert';
import * as V from './index';

describe('required', () => {
    describe('null', () => {
        it('add default error msg when null', () => {
            const propName = 'userName';
            const error = { propName, errorMsg: V.allErrors.REQUIRED };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.required(propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom error msg when null', () => {
            const propName = 'userName';
            const errorMsg = 'CUSTOM_ERROR_MSG';
            const error = { propName, errorMsg };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.requiredWithError(errorMsg, propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });

    describe('undefined', () => {
        it('add default error msg when undefined', () => {
            const propName = 'userName';
            const error = { propName, errorMsg: V.allErrors.REQUIRED };

            const objToValidate = {
                [propName]: undefined
            };

            const validatedObj = V.required(propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom error msg when undefined', () => {
            const propName = 'userName';
            const errorMsg = 'CUSTOM_ERROR_MSG';
            const error = { propName, errorMsg };

            const objToValidate = {
                [propName]: undefined
            };

            const validatedObj = V.requiredWithError(errorMsg, propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });

    describe('empty', () => {
        it('add default error msg when null', () => {
            const propName = 'userName';
            const error = { propName, errorMsg: V.allErrors.REQUIRED };

            const objToValidate = {
                [propName]: ''
            };

            const validatedObj = V.required(propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom error msg when null', () => {
            const propName = 'userName';
            const errorMsg = 'CUSTOM_ERROR_MSG';
            const error = { propName, errorMsg };

            const objToValidate = {
                [propName]: ''
            };

            const validatedObj = V.requiredWithError(errorMsg, propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });

    it('do NOT add error when STRING not empty', () => {
        const propName = 'userName';
        const error = { propName, errorMsg: V.allErrors.REQUIRED };

        const objToValidate = {
            [propName]: 'angeloocana'
        };

        const validatedObj = V.required(propName, objToValidate);

        assert.notOk(V.containsError(error, validatedObj.errors));
    });
});
