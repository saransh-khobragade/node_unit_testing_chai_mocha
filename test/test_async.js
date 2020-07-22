const expect = require('chai').expect;
const example_function = require('../function_to_test/async_functions');

describe('Simple Math Test', () => {
    it('should equal 2', async () => {
        const result = await example_function.add(1, 1);
        expect(result).to.equal(2);
    });

    //handling error also
    it('should throw an error', async () => {
        try {
            await example_function.add(1);
        } catch (err) {
            expect(err).to.equal('missing arg');
        }
    });
});

