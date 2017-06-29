import * as assert from 'ptz-assert';
import * as V from './index';
describe('validate', () => {
    const validateUser = V.validate({
        id: [
            V.generateId
        ],
        displayName: [
            V.required,
            V.isString,
            V.min(2),
            V.max(100)
        ],
        userName: [
            V.required,
            V.isString,
            V.min(2),
            V.max(40),
            V.toLowerCase
        ],
        password: [
            V.required,
            V.isString,
            V.min(6),
            V.max(40)
        ],
        email: [
            V.required,
            V.isEmail
        ],
        weight: [
            V.isNumber,
            V.min(1),
            V.max(1000)
        ],
        birthday: [
            V.isDate,
            V.min(new Date('1800-01-01')),
            V.max(new Date())
        ]
    });
    const createUser = V.validate({
        userName: [
            V.required,
            V.min(3),
            V.max(30)
        ]
    });
    it('invalid user', () => {
        const user = createUser({});
        const error = { propName: 'userName', errorMsg: V.allErrors.REQUIRED };
        assert.ok(V.containsError(error, user.errors));
    });
    it('valid user', () => {
        const user = createUser({ userName: 'angeloocana' });
        assert.emptyArray(user.errors);
    });
    it('createUser example', () => {
        const user = validateUser({
            userName: 'angeloocana',
            password: 'abcd',
            email: 'angeloocana@gmail.com',
            weight: 90,
            birthday: '1992-06-28'
        });
        const expectedUser = {
            id: 'hfk397d',
            userName: 'angeloocana',
            password: 'abcd',
            email: 'angeloocana@gmail.com',
            weight: 90,
            birthday: new Date('1992-06-28'),
            errors: [{
                    propName: 'displayName',
                    errorMsg: 'ERROR_REQUIRED'
                }, {
                    propName: 'password',
                    errorMsg: 'ERROR_MIN'
                }]
        };
        assert.ok(user.id, 'generate id');
        assert.equal(user.userName, expectedUser.userName, 'set userName');
        assert.equal(user.password, expectedUser.password, 'set password');
        assert.equal(user.email, expectedUser.email, 'set email');
        assert.equal(user.weight, expectedUser.weight, 'set weight');
        assert.equal(user.birthday.toString(), expectedUser.birthday.toString(), 'set birthday');
        assert.deepEqual(user.errors, expectedUser.errors, 'add errors');
    });
    it('createUser null username example', () => {
        const user = validateUser({
            userName: null,
            password: 'abcd',
            email: 'angeloocana@gmail.com',
            weight: 90,
            birthday: '1992-06-28'
        });
        const expectedUser = {
            errors: [{
                    propName: 'displayName',
                    errorMsg: 'ERROR_REQUIRED'
                }, {
                    propName: 'userName',
                    errorMsg: 'ERROR_REQUIRED'
                }, {
                    propName: 'password',
                    errorMsg: 'ERROR_MIN'
                }]
        };
        assert.ok(user);
        assert.deepEqual(user.errors, expectedUser.errors, 'add errors');
    });
    it('error null args', () => {
        assert.throws(() => validateUser(null));
    });
});
//# sourceMappingURL=validate.test.js.map