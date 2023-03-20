const { handler } = require('../../src');

describe('#handler', () => {
    it('should validate properly formatted event', () => {
        const properEvent = {
            body: 'someBody'
        };

        const result = handler(properEvent);
        expect(result).toEqual(true);
    });
    it('should invalidate improperly formatted event', () => {
        const improperEvent = {
            body: { field: "value" }
        };

        const result = handler(improperEvent);
        expect(result).toEqual(false);
    });
});
