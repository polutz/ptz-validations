import { ok } from 'ptz-assert';
import { HaveValidation, validateEmail } from './index';
describe('ptz-validations', () => {
    describe('exports', () => {
        it('HaveValidation', () => ok(HaveValidation));
        it('validateEmail', () => ok(validateEmail));
    });
});
//# sourceMappingURL=index.test.js.map