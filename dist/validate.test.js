'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('validate', function () {
    describe('String', function () {
        describe('required', function () {
            describe('null', function () {
                it('return default error msg when null', function () {
                    var propName = 'userName';
                    var propValidation = {
                        required: true
                    };
                    var errors = (0, _index.validateString)({ data: null, propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.REQUIRED);
                    (0, _ptzAssert.equal)(errors[0].propName, propName);
                });
                it('return custom error msg when null', function () {
                    var propName = 'userName';
                    var propValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };
                    var errors = (0, _index.validateString)({ data: null, propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.requiredError);
                    (0, _ptzAssert.equal)(errors[0].propName, propName);
                });
            });
            describe('undefined', function () {
                it('return default error msg when undefined', function () {
                    var propName = 'userName';
                    var propValidation = {
                        required: true
                    };
                    var errors = (0, _index.validateString)({ data: undefined, propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.REQUIRED);
                    (0, _ptzAssert.equal)(errors[0].propName, propName);
                });
                it('return custom error msg when undefined', function () {
                    var propName = 'userName';
                    var propValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };
                    var errors = (0, _index.validateString)({ data: undefined, propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.requiredError);
                    (0, _ptzAssert.equal)(errors[0].propName, propName);
                });
            });
            describe('empty', function () {
                it('return default error msg when empty', function () {
                    var propName = 'userName';
                    var propValidation = {
                        required: true
                    };
                    var errors = (0, _index.validateString)({ data: '', propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.REQUIRED);
                    (0, _ptzAssert.equal)(errors[0].propName, propName);
                });
                it('return custom error msg when empty', function () {
                    var propName = 'userName';
                    var propValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };
                    var errors = (0, _index.validateString)({ data: '', propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.requiredError);
                    (0, _ptzAssert.equal)(errors[0].propName, propName);
                });
            });
            it('do not return error when not empty', function () {
                var propName = 'userName';
                var propValidation = {
                    required: true
                };
                var errors = (0, _index.validateString)({ data: 'angeloocana', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
        });
        describe('minLength', function () {
            it('return default minLength error when less than minLength', function () {
                var propName = 'userName';
                var propValidation = {
                    minLength: 3
                };
                var errors = (0, _index.validateString)({ data: 'ab', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.MIN_LENGTH);
                (0, _ptzAssert.equal)(errors[0].propName, propName);
            });
            it('return custom minLength error when less than minLength', function () {
                var propName = 'userName';
                var propValidation = {
                    minLength: 3,
                    minLengthError: 'CUSTOM_MIN_LENGTH_ERROR'
                };
                var errors = (0, _index.validateString)({ data: 'ab', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.minLengthError);
                (0, _ptzAssert.equal)(errors[0].propName, propName);
            });
            it('do not return minLength error when equal than minLength', function () {
                var propName = 'userName';
                var propValidation = {
                    minLength: 3
                };
                var errors = (0, _index.validateString)({ data: 'abc', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
            it('do not return minLength error when grather than minLength', function () {
                var propName = 'userName';
                var propValidation = {
                    minLength: 3
                };
                var errors = (0, _index.validateString)({ data: 'abcde', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
            it('do not return minLength error when null and not required', function () {
                var propName = 'userName';
                var propValidation = {
                    required: false,
                    minLength: 3
                };
                var errors = (0, _index.validateString)({ data: null, propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
        });
        describe('maxLength', function () {
            it('return default maxLength error when grather than maxLength', function () {
                var propName = 'userName';
                var propValidation = {
                    maxLength: 3
                };
                var errors = (0, _index.validateString)({ data: 'abcd', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.MAX_LENGTH);
                (0, _ptzAssert.equal)(errors[0].propName, propName);
            });
            it('return custom maxLength error when grather than maxLength', function () {
                var propName = 'userName';
                var propValidation = {
                    maxLength: 3,
                    maxLengthError: 'CUSTOM_MAX_LENGTH_ERROR'
                };
                var errors = (0, _index.validateString)({ data: 'abcd', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.maxLengthError);
                (0, _ptzAssert.equal)(errors[0].propName, propName);
            });
            it('do not return maxLength error when equal than maxLength', function () {
                var propName = 'userName';
                var propValidation = {
                    maxLength: 3
                };
                var errors = (0, _index.validateString)({ data: 'abc', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
            it('do not return maxLength error when less than maxLength', function () {
                var propName = 'userName';
                var propValidation = {
                    maxLength: 3
                };
                var errors = (0, _index.validateString)({ data: 'ab', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
            it('do not return maxLength error when null and not required', function () {
                var propName = 'userName';
                var propValidation = {
                    required: false,
                    maxLength: 3
                };
                var errors = (0, _index.validateString)({ data: null, propName: propName, propValidation: propValidation });
                (0, _ptzAssert.emptyArray)(errors);
            });
        });
    });
    describe('Email', function () {
        describe('isValidEmail', function () {
            it('Valid Email', function () {
                (0, _ptzAssert.ok)((0, _index.isValidEmail)('alanmarcell@live.com'));
            });
            it('Invalid Email', function () {
                (0, _ptzAssert.notOk)((0, _index.isValidEmail)('alanmarcelllive.com'));
            });
        });
        describe('validateEmail', function () {
            describe('required', function () {
                describe('null', function () {
                    it('return default error msg when null', function () {
                        var propName = 'email';
                        var propValidation = {
                            required: true
                        };
                        var errors = (0, _index.validateEmail)({ data: null, propName: propName, propValidation: propValidation });
                        (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.REQUIRED);
                        (0, _ptzAssert.equal)(errors[0].propName, propName);
                    });
                    it('return custom error msg when null', function () {
                        var propName = 'email';
                        var propValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };
                        var errors = (0, _index.validateEmail)({ data: null, propName: propName, propValidation: propValidation });
                        (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.requiredError);
                        (0, _ptzAssert.equal)(errors[0].propName, propName);
                    });
                });
                describe('undefined', function () {
                    it('return default error msg when undefined', function () {
                        var propName = 'email';
                        var propValidation = {
                            required: true
                        };
                        var errors = (0, _index.validateEmail)({ data: undefined, propName: propName, propValidation: propValidation });
                        (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.REQUIRED);
                        (0, _ptzAssert.equal)(errors[0].propName, propName);
                    });
                    it('return custom error msg when undefined', function () {
                        var propName = 'email';
                        var propValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };
                        var errors = (0, _index.validateEmail)({ data: undefined, propName: propName, propValidation: propValidation });
                        (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.requiredError);
                        (0, _ptzAssert.equal)(errors[0].propName, propName);
                    });
                });
                describe('empty', function () {
                    it('return default error msg when empty', function () {
                        var propName = 'email';
                        var propValidation = {
                            required: true
                        };
                        var errors = (0, _index.validateEmail)({ data: '', propName: propName, propValidation: propValidation });
                        (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.REQUIRED);
                        (0, _ptzAssert.equal)(errors[0].propName, propName);
                    });
                    it('return custom error msg when empty', function () {
                        var propName = 'email';
                        var propValidation = {
                            required: true,
                            requiredError: 'CUSTOM_ERROR_MSG'
                        };
                        var errors = (0, _index.validateEmail)({ data: '', propName: propName, propValidation: propValidation });
                        (0, _ptzAssert.equal)(errors[0].errorMsg, propValidation.requiredError);
                        (0, _ptzAssert.equal)(errors[0].propName, propName);
                    });
                });
                it('do not return error when not empty', function () {
                    var propName = 'email';
                    var propValidation = {
                        required: true
                    };
                    var errors = (0, _index.validateEmail)({ data: 'angeloocana@gmail.com', propName: propName, propValidation: propValidation });
                    (0, _ptzAssert.emptyArray)(errors);
                });
            });
            describe('return error when invalid email', function () {
                var propName = 'email';
                var propValidation = {
                    required: false
                };
                var errors = (0, _index.validateEmail)({ data: 'abcd', propName: propName, propValidation: propValidation });
                (0, _ptzAssert.equal)(errors[0].errorMsg, _index.allErrors.INVALID_EMAIL);
                (0, _ptzAssert.equal)(errors[0].propName, propName);
            });
        });
    });
});
//# sourceMappingURL=validate.test.js.map