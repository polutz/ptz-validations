import { emptyArray, equal, notOk, ok } from 'ptz-assert';
import {
    allErrors,
    IEmailValidation,
    IStringValidation, isValidEmail, validateEmail, validateString
} from './index';

describe('validate', () => {
    describe('String', () => {
        describe('required', () => {
            describe('null', () => {
                it('return default error msg when null', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true
                    };

                    const context = validateString(propValidation).validate({
                        data: null,
                        propName
                    });

                    equal(context.errors[0].errorMsg, allErrors.REQUIRED);
                    equal(context.errors[0].propName, propName);
                });

                it('return custom error msg when null', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const context = validateString(propValidation).validate({
                        data: null,
                        propName
                    });

                    equal(context.errors[0].errorMsg, propValidation.requiredError);
                    equal(context.errors[0].propName, propName);
                });
            });

            describe('undefined', () => {
                it('return default error msg when undefined', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true
                    };

                    const context = validateString(propValidation).validate({
                        data: undefined,
                        propName
                    });

                    equal(context.errors[0].errorMsg, allErrors.REQUIRED);
                    equal(context.errors[0].propName, propName);
                });

                it('return custom error msg when undefined', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const context = validateString(propValidation).validate({
                        data: undefined,
                        propName
                    });

                    equal(context.errors[0].errorMsg, propValidation.requiredError);
                    equal(context.errors[0].propName, propName);
                });
            });

            describe('empty', () => {
                it('return default error msg when empty', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true
                    };

                    const context = validateString(propValidation).validate({
                        data: '',
                        propName
                    });

                    equal(context.errors[0].errorMsg, allErrors.REQUIRED);
                    equal(context.errors[0].propName, propName);
                });

                it('return custom error msg when empty', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const context = validateString(propValidation).validate({
                        data: '',
                        propName
                    });

                    equal(context.errors[0].errorMsg, propValidation.requiredError);
                    equal(context.errors[0].propName, propName);
                });
            });

            it('do not return error when not empty', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    required: true
                };

                const context = validateString(propValidation).validate({
                    data: 'angeloocana',
                    propName
                });

                emptyArray(context.errors);
            });
        });

        describe('minLength', () => {
            it('return default minLength error when less than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: 'ab',
                    propName
                });

                equal(context.errors[0].errorMsg, allErrors.MIN_LENGTH);
                equal(context.errors[0].propName, propName);
            });

            it('return custom minLength error when less than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3,
                    minLengthError: 'CUSTOM_MIN_LENGTH_ERROR'
                };

                const context = validateString(propValidation).validate({
                    data: 'ab',
                    propName
                });

                equal(context.errors[0].errorMsg, propValidation.minLengthError);
                equal(context.errors[0].propName, propName);
            });

            it('do not return minLength error when equal than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: 'abc',
                    propName
                });

                emptyArray(context.errors);
            });

            it('do not return minLength error when grather than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: 'abcde',
                    propName
                });

                emptyArray(context.errors);
            });

            it('do not return minLength error when null and not required', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    required: false,
                    minLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: null,
                    propName
                });

                emptyArray(context.errors);
            });
        });

        describe('maxLength', () => {
            it('return default maxLength error when grather than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: 'abcd',
                    propName
                });

                equal(context.errors[0].errorMsg, allErrors.MAX_LENGTH);
                equal(context.errors[0].propName, propName);
            });

            it('return custom maxLength error when grather than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3,
                    maxLengthError: 'CUSTOM_MAX_LENGTH_ERROR'
                };

                const context = validateString(propValidation).validate({
                    data: 'abcd',
                    propName
                });

                equal(context.errors[0].errorMsg, propValidation.maxLengthError);
                equal(context.errors[0].propName, propName);
            });

            it('do not return maxLength error when equal than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: 'abc',
                    propName
                });

                emptyArray(context.errors);
            });

            it('do not return maxLength error when less than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: 'ab',
                    propName
                });

                emptyArray(context.errors);
            });

            it('do not return maxLength error when null and not required', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    required: false,
                    maxLength: 3
                };

                const context = validateString(propValidation).validate({
                    data: null,
                    propName
                });

                emptyArray(context.errors);
            });
        });
    });

    describe('Email', () => {
        describe('isValidEmail', () => {
            it('Valid Email', () => {
                ok(isValidEmail('alanmarcell@live.com'));
            });
            it('Invalid Email', () => {
                notOk(isValidEmail('alanmarcelllive.com'));
            });
        });

        describe('validateEmail', () => {
            describe('required', () => {
                describe('null', () => {
                    it('return default error msg when null', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true
                        };

                        const context = validateEmail(propValidation).validate({
                            data: null,
                            propName
                        });

                        equal(context.errors[0].errorMsg, allErrors.REQUIRED);
                        equal(context.errors[0].propName, propName);
                    });

                    it('return custom error msg when null', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };

                        const context = validateEmail(propValidation).validate({
                            data: null,
                            propName
                        });

                        equal(context.errors[0].errorMsg, propValidation.requiredError);
                        equal(context.errors[0].propName, propName);
                    });
                });

                describe('undefined', () => {
                    it('return default error msg when undefined', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true
                        };

                        const context = validateEmail(propValidation).validate({
                            data: undefined,
                            propName
                        });

                        equal(context.errors[0].errorMsg, allErrors.REQUIRED);
                        equal(context.errors[0].propName, propName);
                    });

                    it('return custom error msg when undefined', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };

                        const context = validateEmail(propValidation).validate({
                            data: undefined,
                            propName
                        });

                        equal(context.errors[0].errorMsg, propValidation.requiredError);
                        equal(context.errors[0].propName, propName);
                    });
                });

                describe('empty', () => {
                    it('return default error msg when empty', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true
                        };

                        const context = validateEmail(propValidation).validate({
                            data: '',
                            propName
                        });

                        equal(context.errors[0].errorMsg, allErrors.REQUIRED);
                        equal(context.errors[0].propName, propName);
                    });

                    it('return custom error msg when empty', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };

                        const context = validateEmail(propValidation).validate({
                            data: '',
                            propName
                        });

                        equal(context.errors[0].errorMsg, propValidation.requiredError);
                        equal(context.errors[0].propName, propName);
                    });
                });

                it('do not return error when not empty', () => {
                    const propName = 'email';
                    const propValidation: IEmailValidation = {
                        required: true
                    };

                    const context = validateEmail(propValidation).validate({
                        data: 'angeloocana@gmail.com',
                        propName
                    });

                    emptyArray(context.errors);
                });
            });

            describe('return error when invalid email', () => {
                const propName = 'email';
                const propValidation: IEmailValidation = {
                    required: false
                };

                const context = validateEmail(propValidation).validate({
                    data: 'abcd',
                    propName
                });

                equal(context.errors[0].errorMsg, allErrors.INVALID_EMAIL);
                equal(context.errors[0].propName, propName);
            });
        });
    });
});
