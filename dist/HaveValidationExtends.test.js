'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyTestClass = function (_HaveValidation) {
    _inherits(MyTestClass, _HaveValidation);

    function MyTestClass(args) {
        _classCallCheck(this, MyTestClass);

        var _this = _possibleConstructorReturn(this, (MyTestClass.__proto__ || Object.getPrototypeOf(MyTestClass)).call(this, args));

        _this.setName(args.name);
        return _this;
    }

    _createClass(MyTestClass, [{
        key: 'setName',
        value: function setName(name) {
            this.addErrors((0, _index.validateString)({
                data: name,
                propName: 'name',
                propValidation: MyTestClass.nameValidation
            }));
            this.name = name;
        }
    }]);

    return MyTestClass;
}(_index.HaveValidation);

MyTestClass.nameValidation = {
    required: true
};
//# sourceMappingURL=HaveValidationExtends.test.js.map