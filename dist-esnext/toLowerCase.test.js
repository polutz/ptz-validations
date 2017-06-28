import * as assert from 'ptz-assert';
import * as V from './index';
it('toLowerCase', () => {
    const propName = 'userName';
    const objToValidate = {
        [propName]: 'ANGELOOCANA'
    };
    const validatedObj = V.toLowerCase(propName, objToValidate);
    assert.equal(validatedObj[propName], 'angeloocana');
});
it('toLowerCase', () => {
    const propName = 'userName';
    const objToValidate = {
        [propName]: null
    };
    const validatedObj = V.toLowerCase(propName, objToValidate);
    assert.notOk(validatedObj);
    // assert.equal(validatedObj[propName], 'angeloocana');
});
//# sourceMappingURL=toLowerCase.test.js.map