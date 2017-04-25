'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_HaveValidation) {
    _inherits(User, _HaveValidation);

    function User(args) {
        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, args));

        args = _this.validate(User.validations, args);
        _this.userName = args.userName;
        _this.email = args.email;
        _this.displayName = args.displayName;
        return _this;
    }

    return User;
}(_index.HaveValidation);

User.validations = {
    userName: (0, _index.validateString)({
        required: true,
        toLowerCase: true,
        minLength: 3,
        maxLength: 50
    }),
    email: (0, _index.validateEmail)({
        required: true
    }),
    displayName: (0, _index.validateString)({
        maxLength: 140,
        minLength: 2,
        required: true
    })
};
describe('extends HaveValidation', function () {
    describe('User class example', function () {
        it('creates new valid user', function () {
            var userArgs = {
                displayName: 'Angelo Ocana',
                email: 'AngeloOcana@Gmail.Com',
                userName: 'AngeloOcana'
            };
            var user = new User(userArgs);
            (0, _ptzAssert.equal)(user.displayName, userArgs.displayName);
            (0, _ptzAssert.equal)(user.email, 'angeloocana@gmail.com');
            (0, _ptzAssert.equal)(user.userName, 'angeloocana');
        });
        it('add error invalid email', function () {
            var userArgs = {
                displayName: 'Angelo Ocana',
                email: 'AngeloOcana_Gmail_Com',
                userName: 'AngeloOcana'
            };
            var user = new User(userArgs);
            (0, _ptzAssert.containsFind)(user.errors, function (error) {
                return error.propName === 'email' && error.errorMsg === _index.allErrors.INVALID_EMAIL;
            });
        });
    });
});
//# sourceMappingURL=HaveValidationExtends.test.js.map