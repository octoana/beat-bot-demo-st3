// create unit tests for each method in the calculator object
// using the Jest testing framework
// write 3 tests for each method

const calculator = require('./calculator');

describe('calculator', () => {
    describe('add', () => {
        test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
        });
    
        test('adds 3 + 4 to equal 7', () => {
        expect(calculator.add(3, 4)).toBe(7);
        });
    
        test('adds 5 + 6 to equal 11', () => {
        expect(calculator.add(5, 6)).toBe(11);
        });
    });
    
    describe('subtract', () => {
        test('subtracts 2 - 1 to equal 1', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
        });
    
        test('subtracts 4 - 3 to equal 1', () => {
        expect(calculator.subtract(4, 3)).toBe(1);
        });
    
        test('subtracts 6 - 5 to equal 1', () => {
        expect(calculator.subtract(6, 5)).toBe(1);
        });
    });
    
    describe('multiply', () => {
        test('multiplies 1 * 2 to equal 2', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
        });
    
        test('multiplies 3 * 4 to equal 12', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
        });
    
        test('multiplies 5 * 6 to equal 30', () => {
        expect(calculator.multiply(5, 6)).toBe(30);
        });
    });
    
    describe('divide', () => {
        test('divides 2 / 1 to equal 2', () => {
        expect(calculator.divide(2, 1)).toBe(2);
        });
    
        test('divides 4 / 2 to equal 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
        });
    
        test('divides 6 / 3 to equal 2', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        });
    });
    
    describe('square', () => {
        test('squares 2 to equal 4', () => {
        expect(calculator.square(2)).toBe(4);
        });
    
        test('squares 4 to equal 16', () => {
        expect(calculator.square(4)).toBe(16);
        }   );

        test('squares 6 to equal 36', () => {
        expect(calculator.square(6)).toBe(36);
        }
        );
    }
    );