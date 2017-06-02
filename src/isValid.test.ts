import * as assert from 'ptz-assert';
import * as V from './index';

describe('isValid', () => {
    it('should return true when errors is null', () => {
        const entity = { errors: null };
        assert.ok(V.isValid(entity));
    });

    it('should return true when error is empty', () => {
        const entity = { errors: [] };
        assert.ok(V.isValid(entity));
    });

    it('should return false when there are errors', () => {
        const entity = { errors: [{ errorMsg: 'ERROR_ANOTHER_ERROR' }] };
        assert.notOk(V.isValid(entity));
    });
});
