import * as assert from 'ptz-assert';
import * as V from './index';
it('toUpperCase', () => {
    const propName = 'userName';
    const propValidation = {
        toUpperCase: true
    };
    const objToValidate = {
        [propName]: 'angeloocana'
    };
    const validatedObj = V.validateString(propValidation, propName, objToValidate);
    assert.equal(validatedObj[propName], 'ANGELOOCANA');
});
//# sourceMappingURL=toUpperCase.test.js.map