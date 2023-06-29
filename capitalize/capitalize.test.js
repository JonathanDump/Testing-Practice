import { capitalize } from './capitalize.js';

test('make first latter capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});
