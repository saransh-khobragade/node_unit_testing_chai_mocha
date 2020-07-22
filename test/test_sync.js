const expect = require('chai').expect;
const example_function = require('../example_function');

describe('Simple Math Test', () => {
    it('should return 2', () => {
        expect(1 + 1).to.equal(2);
    });
    it('should return 9', () => {
        expect(3 * 3).to.equal(9);
    });
});

describe('abc.js tests', () => {
    describe('abc.add() Test', () => {
        it('should equal 2', () => {
            const result = example_function.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = example_function.add(2, 2);
            expect(result).to.equal(4);
        });
    });

    describe('abc.multiply() Test', () => {
        
        it('should equal 3', () => {
            const result = example_function.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = example_function.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
});