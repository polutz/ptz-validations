import { containsFind, equal } from 'ptz-assert';
import { allErrors, HaveValidation, validateEmail, validateString } from './index';
class User extends HaveValidation {
    constructor(args) {
        super(args);
        args = this.validate(User.validations, args);
        this.userName = args.userName;
        this.email = args.email;
        this.displayName = args.displayName;
    }
}
User.validations = {
    userName: validateString({
        required: true,
        toLowerCase: true,
        minLength: 3,
        maxLength: 50
    }),
    email: validateEmail({
        required: true
    }),
    displayName: validateString({
        maxLength: 140,
        minLength: 2,
        required: true
    })
};
describe('extends HaveValidation', () => {
    describe('User class example', () => {
        it('creates new valid user', () => {
            const userArgs = {
                displayName: 'Angelo Ocana',
                email: 'AngeloOcana@Gmail.Com',
                userName: 'AngeloOcana'
            };
            const user = new User(userArgs);
            equal(user.displayName, userArgs.displayName);
            equal(user.email, 'angeloocana@gmail.com');
            equal(user.userName, 'angeloocana');
        });
        it('add error invalid email', () => {
            const userArgs = {
                displayName: 'Angelo Ocana',
                email: 'AngeloOcana_Gmail_Com',
                userName: 'AngeloOcana'
            };
            const user = new User(userArgs);
            containsFind(user.errors, (error) => error.propName === 'email'
                && error.errorMsg === allErrors.INVALID_EMAIL);
        });
    });
});
//# sourceMappingURL=HaveValidationExtends.test.js.map