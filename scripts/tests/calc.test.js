const calculator = require('../calc');

const x = 13;
const y = 5;
test('Add numbers using the add method', () => {
     expect(calculator.addition(x, y)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
     expect(calculator.subtract(x, y)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
     expect(calculator.multiply(x, y)).toBe(65)
});
test('Divide numbers using the divide method', () => {
     expect(calculator.divide(x, y)).toBe(2.6)
});
