import { contains, emptyArray, equal, notContains, notOk, ok } from 'ptz-assert';
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

                    const errors = validateString({ data: null, propName, propValidation });
                    equal(errors[0].errorMsg, allErrors.REQUIRED);
                    equal(errors[0].propName, propName);
                });

                it('return custom error msg when null', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const errors = validateString({ data: null, propName, propValidation });
                    equal(errors[0].errorMsg, propValidation.requiredError);
                    equal(errors[0].propName, propName);
                });
            });

            describe('undefined', () => {
                it('return default error msg when undefined', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true
                    };

                    const errors = validateString({ data: undefined, propName, propValidation });
                    equal(errors[0].errorMsg, allErrors.REQUIRED);
                    equal(errors[0].propName, propName);
                });

                it('return custom error msg when undefined', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const errors = validateString({ data: undefined, propName, propValidation });
                    equal(errors[0].errorMsg, propValidation.requiredError);
                    equal(errors[0].propName, propName);
                });
            });

            describe('empty', () => {
                it('return default error msg when empty', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true
                    };

                    const errors = validateString({ data: '', propName, propValidation });
                    equal(errors[0].errorMsg, allErrors.REQUIRED);
                    equal(errors[0].propName, propName);
                });

                it('return custom error msg when empty', () => {
                    const propName = 'userName';
                    const propValidation: IStringValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const errors = validateString({ data: '', propName, propValidation });
                    equal(errors[0].errorMsg, propValidation.requiredError);
                    equal(errors[0].propName, propName);
                });
            });

            it('do not return error when not empty', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    required: true
                };

                const errors = validateString({ data: 'angeloocana', propName, propValidation });
                emptyArray(errors);
            });
        });

        describe('minLength', () => {
            it('return default minLength error when less than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3
                };

                const errors = validateString({ data: 'ab', propName, propValidation });
                equal(errors[0].errorMsg, allErrors.MIN_LENGTH);
                equal(errors[0].propName, propName);
            });

            it('return custom minLength error when less than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3,
                    minLengthError: 'CUSTOM_MIN_LENGTH_ERROR'
                };

                const errors = validateString({ data: 'ab', propName, propValidation });
                equal(errors[0].errorMsg, propValidation.minLengthError);
                equal(errors[0].propName, propName);
            });

            it('do not return minLength error when equal than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3
                };

                const errors = validateString({ data: 'abc', propName, propValidation });
                emptyArray(errors);
            });

            it('do not return minLength error when grather than minLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    minLength: 3
                };

                const errors = validateString({ data: 'abcde', propName, propValidation });
                emptyArray(errors);
            });

            it('do not return minLength error when null and not required', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    required: false,
                    minLength: 3
                };

                const errors = validateString({ data: null, propName, propValidation });
                emptyArray(errors);
            });
        });

        describe('maxLength', () => {
            it('return default maxLength error when grather than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3
                };

                const errors = validateString({ data: 'abcd', propName, propValidation });
                equal(errors[0].errorMsg, allErrors.MAX_LENGTH);
                equal(errors[0].propName, propName);
            });

            it('return custom maxLength error when grather than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3,
                    maxLengthError: 'CUSTOM_MAX_LENGTH_ERROR'
                };

                const errors = validateString({ data: 'abcd', propName, propValidation });
                equal(errors[0].errorMsg, propValidation.maxLengthError);
                equal(errors[0].propName, propName);
            });

            it('do not return maxLength error when equal than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3
                };

                const errors = validateString({ data: 'abc', propName, propValidation });
                emptyArray(errors);
            });

            it('do not return maxLength error when less than maxLength', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    maxLength: 3
                };

                const errors = validateString({ data: 'ab', propName, propValidation });
                emptyArray(errors);
            });

            it('do not return maxLength error when null and not required', () => {
                const propName = 'userName';
                const propValidation: IStringValidation = {
                    required: false,
                    maxLength: 3
                };

                const errors = validateString({ data: null, propName, propValidation });
                emptyArray(errors);
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

                        const errors = validateEmail({ data: null, propName, propValidation });
                        equal(errors[0].errorMsg, allErrors.REQUIRED);
                        equal(errors[0].propName, propName);
                    });

                    it('return custom error msg when null', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };

                        const errors = validateEmail({ data: null, propName, propValidation });
                        equal(errors[0].errorMsg, propValidation.requiredError);
                        equal(errors[0].propName, propName);
                    });
                });

                describe('undefined', () => {
                    it('return default error msg when undefined', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true
                        };

                        const errors = validateEmail({ data: undefined, propName, propValidation });
                        equal(errors[0].errorMsg, allErrors.REQUIRED);
                        equal(errors[0].propName, propName);
                    });

                    it('return custom error msg when undefined', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };

                        const errors = validateEmail({ data: undefined, propName, propValidation });
                        equal(errors[0].errorMsg, propValidation.requiredError);
                        equal(errors[0].propName, propName);
                    });
                });

                describe('empty', () => {
                    it('return default error msg when empty', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true
                        };

                        const errors = validateEmail({ data: '', propName, propValidation });
                        equal(errors[0].errorMsg, allErrors.REQUIRED);
                        equal(errors[0].propName, propName);
                    });

                    it('return custom error msg when empty', () => {
                        const propName = 'email';
                        const propValidation: IEmailValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };

                        const errors = validateEmail({ data: '', propName, propValidation });
                        equal(errors[0].errorMsg, propValidation.requiredError);
                        equal(errors[0].propName, propName);
                    });
                });

                it('do not return error when not empty', () => {
                    const propName = 'email';
                    const propValidation: IEmailValidation = {
                        required: true
                    };

                    const errors = validateEmail({ data: 'angeloocana@gmail.com', propName, propValidation });
                    emptyArray(errors);
                });
            });

            describe('return error when invalid email', () => {
                const propName = 'email';
                const propValidation: IEmailValidation = {
                    required: false
                };

                const errors = validateEmail({ data: 'abcd', propName, propValidation });
                equal(errors[0].errorMsg, allErrors.INVALID_EMAIL);
                equal(errors[0].propName, propName);
            });
        });
    });
});
