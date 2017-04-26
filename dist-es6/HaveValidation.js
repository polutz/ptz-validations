export default class HaveValidation {
    constructor(args) {
        if (!args)
            args = {};
        this.addErrors(args.errors);
    }
    validate(validations, args) {
        Object.keys(validations).forEach(propName => {
            const context = validations[propName].validate({
                data: args[propName],
                propName
            });
            args[propName] = context.data;
            this.addErrors(context.errors);
        });
        return args;
    }
    addError(error) {
        if (error == null)
            return;
        const sameErrorIndex = this.errors
            .findIndex(e => e.propName === error.propName
            && e.errorMsg === error.errorMsg);
        if (!(sameErrorIndex >= 0))
            this.errors.push(error);
    }
    addErrors(errors) {
        if (this.errors == null)
            this.errors = [];
        if (errors == null)
            return;
        errors.forEach(error => this.addError(error));
    }
    isValid() {
        return !this.errors || this.errors.length === 0;
    }
}
export { HaveValidation };
//# sourceMappingURL=HaveValidation.js.map