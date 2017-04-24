import { HaveValidation, IStringValidation, validateString } from './index';

class MyTestClass extends HaveValidation {
    static nameValidation: IStringValidation = {
        required: true
    };

    name: string;

    constructor(args) {
        super(args);

        this.setName(args.name);
    }

    setName(name: string) {
        this.addErrors(validateString({
            data: name,
            propName: 'name',
            propValidation: MyTestClass.nameValidation
        }));

        this.name = name;
    }
}
