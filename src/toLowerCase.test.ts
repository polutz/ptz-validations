import * as assert from 'ptz-assert';
import * as V from './index';

describe('toLowerCase', () => {
    it('should lowercase a string', () => {
        const propName = 'userName';

        const objToValidate = {
            [propName]: 'ANGELOOCANA'
        };

        const validatedObj = V.toLowerCase(propName, objToValidate);

        assert.equal(validatedObj[propName], 'angeloocana');
    });
    it('should return NULL if propName is NULL', () => {
        const propName = 'userName';

        const objToValidate = {
            [propName]: null
        };

        const validatedObj = V.toLowerCase(propName, objToValidate);
        assert.equal(validatedObj[propName], null);
        assert.notOk(validatedObj.errors);
    });
});
