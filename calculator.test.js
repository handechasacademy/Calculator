const { add, subtract, multiply, divide } = require('./calculator.js');

describe('Calculator functions', () => {
    
    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(add(1, 2)).toBe(3);
        });
        
        test('should add negative numbers', () => {
            expect(add(-4, -3)).toBe(-7);
        });
        
        test('should handle decimals', () => {
            expect(add(3.7, 4.5)).toBeCloseTo(8.2, 1);
        });
    });
    
    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(subtract(4, 3)).toBe(1);
        });
        
        test('should handle negative results', () => {
            expect(subtract(3, 4)).toBe(-1);
        });
    });
    
    describe('multiply', () => {
        test('should multiply two numbers', () => {
            expect(multiply(4, 3)).toBe(12);
        });
        
        test('should multiply by zero', () => {
            expect(multiply(4, 0)).toBe(0);
        });
        
        test('should multiply negative numbers', () => {
            expect(multiply(-4, -3)).toBe(12);
            expect(multiply(-4, 3)).toBe(-12);
        });
    });
    
    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(divide(4, 2)).toBe(2);
        });
        
        test('should handle decimals', () => {
            expect(divide(10, 3)).toBeCloseTo(3.33, 2);
        });
        
        test('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow();
            expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
        });
    });
});