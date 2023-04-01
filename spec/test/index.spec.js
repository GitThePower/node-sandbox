const { handler } = require('../../src');

xdescribe('#handler', () => {
    it('should validate properly formatted event', async () => {
        const properEvent = {
            body: 'someBody'
        };

        const result = await handler(properEvent);
        console.log("RESULT:", result);
        expect(result).toBeTruthy();
    });
    it('should invalidate improperly formatted event', async () => {
        const improperEvent = {
            body: { field: "value" }
        };

        const result = await handler(improperEvent);
        expect(result).toEqual(false);
    });
    it('should throw an error when the request fails', async () => {
        const improperEvent = {
            body: { field: "value" }
        };

        let result = { field: 'field'};
        try {
            result = await handler(improperEvent);
        } catch (e) {
            expect(e).toEqual(false);
        }
        expect(result).toBeFalsy();
    });
});

