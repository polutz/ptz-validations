import * as assert from 'ptz-assert';
import * as V from './index';

it('toLowerCase', () => {
    const propName = 'userName';

    const propValidation: V.IStringValidation = {
        toLowerCase: true
    };

    const objToValidate = {
        [propName]: 'ANGELOOCANA'
    };

    const validatedObj = V.validateString(propValidation, propName, objToValidate);

    assert.equal(validatedObj[propName], 'angeloocana');
});
