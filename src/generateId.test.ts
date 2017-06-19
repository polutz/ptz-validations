import * as assert from 'ptz-assert';
import * as Core from './index';

describe('generateId', () => {
    it('Generate Id', () => {
        const entity = Core.generateId('id', {});

        assert.notEmptyString(entity.id);
    });

    it('Set _id to id', () => {
        const id = 'jh47mk2';
        const entity = Core.generateId('id', { _id: id });

        assert.equal(entity.id, id);
    });

    it('Set id', () => {
        const id = 'jh47mk2';
        const entity = Core.generateId('id', { id });

        assert.equal(entity.id, id);
    });

    it('Generate Id when null object', () => {
        const entity = Core.generateId('id', null);
        assert.notEmptyString(entity.id);
    });
});
