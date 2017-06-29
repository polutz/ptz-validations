import * as assert from 'ptz-assert';
import * as V from './index';

describe('toUpperCase', () => {
    it('should UPPERCASE a string', () => {
        const propName = 'userName';

        const objToValidate = {
            [propName]: 'angeloocana'
        };

        const validatedObj = V.toUpperCase(propName, objToValidate);

        assert.equal(validatedObj[propName], 'ANGELOOCANA');
    });
    it('should return NULL if propName is NULL', () => {
        const propName = 'userName';

        const objToValidate = {
            [propName]: null
        };

        const validatedObj = V.toUpperCase(propName, objToValidate);
        assert.equal(validatedObj[propName], null);
        assert.notOk(validatedObj.errors);
    });
});
