import * as assert from 'ptz-assert';
import * as V from './index';

describe('validateDate', () => {
    describe('required', () => {
        describe('null', () => {
            it('add default error msg when null', () => {
                const propName = 'birthday';

                const propValidation: V.IDateValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: null
                };

                const validatedObj = V.validateDate(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when null', () => {
                const propName = 'birthday';

                const propValidation: V.IDateValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: null
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateDate(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        describe('undefined', () => {
            it('add default error msg when undefined', () => {
                const propName = 'birthday';

                const propValidation: V.IDateValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: undefined
                };

                const validatedObj = V.validateDate(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when undefined', () => {
                const propName = 'birthday';

                const propValidation: V.IDateValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: undefined
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateDate(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        describe('empty', () => {
            it('add default error msg when null', () => {
                const propName = 'birthday';

                const propValidation: V.IDateValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: ''
                };

                const validatedObj = V.validateDate(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when null', () => {
                const propName = 'birthday';

                const propValidation: V.IDateValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: ''
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateDate(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        it('do NOT add error when valid date', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                required: true
            };

            const objToValidate = {
                [propName]: '1992-06-28'
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.REQUIRED };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    describe('min', () => {
        it('add default min error when smaller than min', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                min: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: new Date('2017-06-10')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom min error when smaller than min', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                min: new Date('2017-06-20'),
                minError: 'CUSTOM_MIN_LENGTH_ERROR'
            };

            const objToValidate = {
                [propName]: new Date('2017-06-10')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: propValidation.minError };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add min error when equal than min', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                min: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: new Date('2017-06-20')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add min error when grater than min', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                min: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: new Date('2017-06-30')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add min error when null and not required', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                required: false,
                min: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    describe('max', () => {
        it('add default max error when grater than max', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                max: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: new Date('2017-06-30')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom max error when grater than max', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                max: new Date('2017-06-20'),
                maxError: 'CUSTOM_MAX_LENGTH_ERROR'
            };

            const objToValidate = {
                [propName]: new Date('2017-06-30')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: propValidation.maxError };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do not add max error when equal than max', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                max: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: new Date('2017-06-20')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add max error when smaller than max', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                max: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: new Date('2017-06-10')
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add max error when null and not required', () => {
            const propName = 'birthday';

            const propValidation: V.IDateValidation = {
                required: false,
                max: new Date('2017-06-20')
            };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.validateDate(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
