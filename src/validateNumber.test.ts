import * as assert from 'ptz-assert';
import * as V from './index';

describe('validateNumber', () => {
    describe('required', () => {
        describe('null', () => {
            it('add default error msg when null', () => {
                const propName = 'age';

                const propValidation: V.INumberValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: null
                };

                const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when null', () => {
                const propName = 'age';

                const propValidation: V.INumberValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: null
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        describe('undefined', () => {
            it('add default error msg when undefined', () => {
                const propName = 'age';

                const propValidation: V.INumberValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: undefined
                };

                const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when undefined', () => {
                const propName = 'age';

                const propValidation: V.INumberValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: undefined
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        it('do NOT add error when not empty', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                required: true
            };

            const objToValidate = {
                [propName]: 25
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.REQUIRED };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    describe('min', () => {
        it('add default min error when less than min', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                min: 3
            };

            const objToValidate = {
                [propName]: 4
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('add custom min error when less than min', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                min: 3,
                minError: 'CUSTOM_MIN_LENGTH_ERROR'
            };

            const objToValidate = {
                [propName]: 1
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: propValidation.minError };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add min error when equal than min', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                min: 3
            };

            const objToValidate = {
                [propName]: 3
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add min error when grater than min', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                min: 3
            };

            const objToValidate = {
                [propName]: 4
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add min error when null and not required', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                required: false,
                min: 3
            };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    describe('max', () => {
        it('add default max error when grater than max', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                max: 3
            };

            const objToValidate = {
                [propName]: 4
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom max error when grater than max', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                max: 3,
                maxError: 'CUSTOM_MAX_LENGTH_ERROR'
            };

            const objToValidate = {
                [propName]: 4
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: propValidation.maxError };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do not add max error when equal than max', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                max: 3
            };

            const objToValidate = {
                [propName]: 3
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add max error when less than max', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                max: 3
            };

            const objToValidate = {
                [propName]: 2
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add max error when null and not required', () => {
            const propName = 'age';

            const propValidation: V.INumberValidation = {
                required: false,
                max: 3
            };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.validateNumber(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
