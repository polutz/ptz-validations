import { ok } from 'ptz-assert';
import {
    HaveValidation,
    IHaveValidation,
    IHaveValidationArgs,
    validateEmail
} from './index';

describe('ptz-validations', () => {
    describe('exports', () => {
        it('HaveValidation', () => ok(HaveValidation));
        it('validateEmail', () => ok(validateEmail));
    });
});
