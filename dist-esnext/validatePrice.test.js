import * as assert from 'ptz-assert';
import * as V from './index';
describe('validatePrice', () => {
    describe('invalidNumber', () => {
        it('add default invalidNumber error when is not a number', () => {
            const propName = 'price';
            const propValidation = {
                required: true
            };
            const objToValidate = {
                [propName]: 'notanumber'
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.INVALID_NUMBER_ERROR };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom invalidNumber error msg when is not a number', () => {
            const propName = 'price';
            const propValidation = {
                required: true,
                requiredError: 'CUSTOM_ERROR_MSG'
            };
            const objToValidate = {
                [propName]: null
            };
            const error = { propName, errorMsg: propValidation.requiredError };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            assert.ok(V.containsError(error, validatedObj.errors));
        });
    });
    describe('required', () => {
        describe('null', () => {
            it('add default error msg when null', () => {
                const propName = 'price';
                const propValidation = {
                    required: true
                };
                const objToValidate = {
                    [propName]: null
                };
                const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                const error = { propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', () => {
                const propName = 'price';
                const propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                const objToValidate = {
                    [propName]: null
                };
                const error = { propName, errorMsg: propValidation.requiredError };
                const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('undefined', () => {
            it('add default error msg when undefined', () => {
                const propName = 'price';
                const propValidation = {
                    required: true
                };
                const objToValidate = {
                    [propName]: undefined
                };
                const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                const error = { propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when undefined', () => {
                const propName = 'price';
                const propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                const objToValidate = {
                    [propName]: undefined
                };
                const error = { propName, errorMsg: propValidation.requiredError };
                const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        describe('empty', () => {
            it('add default error msg when null', () => {
                const propName = 'price';
                const propValidation = {
                    required: true
                };
                const objToValidate = {
                    [propName]: ''
                };
                const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                const error = { propName, errorMsg: V.allErrors.REQUIRED };
                assert.ok(V.containsError(error, validatedObj.errors));
            });
            it('add custom error msg when null', () => {
                const propName = 'price';
                const propValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };
                const objToValidate = {
                    [propName]: ''
                };
                const error = { propName, errorMsg: propValidation.requiredError };
                const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });
        it('do NOT add error when not empty', () => {
            const propName = 'price';
            const propValidation = {
                required: true
            };
            const objToValidate = {
                [propName]: 10
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.REQUIRED };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('canBeZero', () => {
        it('add default cannotBeZero error when equals zero', () => {
            const propName = 'price';
            const propValidation = {
                canBeZero: false
            };
            const objToValidate = {
                [propName]: 0
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('add custom cannotBeZero error when equals zero', () => {
            const propName = 'price';
            const propValidation = {
                canBeZero: false,
                cannotBeZeroError: 'CUSTOM_CANNOT_BE_ZERO_ERROR'
            };
            const objToValidate = {
                [propName]: 0
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: propValidation.cannotBeZeroError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeZero error when price is above ZERO', () => {
            const propName = 'price';
            const propValidation = {
                canBeZero: false
            };
            const objToValidate = {
                [propName]: 1
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.CANNOT_BE_ZERO };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeZero error if price can be ZERO ', () => {
            const propName = 'price';
            const propValidation = {
                canBeZero: true
            };
            const objToValidate = {
                [propName]: 0
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.CANNOT_BE_ZERO };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
    describe('canBeNegative', () => {
        it('add default cannotBeNegative error when price is negative', () => {
            const propName = 'price';
            const propValidation = {
                canBeNegative: false
            };
            const objToValidate = {
                [propName]: -1
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('add custom cannotBeNegative error when price is negative', () => {
            const propName = 'price';
            const propValidation = {
                canBeNegative: false,
                cannotBeNegativeError: 'CUSTOM_CANNOT_BE_NEGATIVE_ERROR'
            };
            const objToValidate = {
                [propName]: -1
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: propValidation.cannotBeNegativeError };
            assert.ok(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeNegative error when price is positive', () => {
            const propName = 'price';
            const propValidation = {
                canBeNegative: false
            };
            const objToValidate = {
                [propName]: 1
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeNegative error when price is zero', () => {
            const propName = 'price';
            const propValidation = {
                canBeNegative: false
            };
            const objToValidate = {
                [propName]: 0
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
        it('do NOT add cannotBeNegative error when price can be negative', () => {
            const propName = 'price';
            const propValidation = {
                canBeNegative: true
            };
            const objToValidate = {
                [propName]: -10
            };
            const validatedObj = V.validatePrice(propValidation, propName, objToValidate);
            const error = { propName, errorMsg: V.allErrors.CANNOT_BE_NEGATIVE };
            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
//# sourceMappingURL=validatePrice.test.js.map