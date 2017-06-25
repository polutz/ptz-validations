import * as assert from 'ptz-assert';
import * as V from './index';
describe('validate', () => {
    it('invalid user', () => {
        const createUser = V.validate({
            userName: V.validateString({
                required: true,
                minLength: 3,
                maxLength: 30
            })
        });
        const user = createUser({});
        const error = { propName: 'userName', errorMsg: V.allErrors.REQUIRED };
        assert.ok(V.containsError(error, user.errors));
    });
    it('valid user', () => {
        const createUser = V.validate({
            userName: V.validateString({
                required: true,
                minLength: 3,
                maxLength: 30
            })
        });
        const user = createUser({ userName: 'angeloocana' });
        assert.emptyArray(user.errors);
    });
});
//# sourceMappingURL=validate.test.js.map