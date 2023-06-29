import { calculator } from './calculator';

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('divide', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('multiply', () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});
