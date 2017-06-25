import * as assert from 'ptz-assert';
import * as V from './index';
it('toUpperCase', () => {
    const propName = 'userName';
    const objToValidate = {
        [propName]: 'angeloocana'
    };
    const validatedObj = V.toUpperCase(propName, objToValidate);
    assert.equal(validatedObj[propName], 'ANGELOOCANA');
});
//# sourceMappingURL=toUpperCase.test.js.map