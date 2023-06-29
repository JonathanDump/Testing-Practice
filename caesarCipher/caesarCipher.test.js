import { caesarCipher } from './caesarCipher';

describe('cipher', () => {
  test('move by 1', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
      'bcdefghijklmnopqrstuvwxyza'
    );
  });

  test('save case and symbols', () => {
    expect(caesarCipher('Abcdefghijklmnopqrstuvwxyz!', 1)).toBe(
      'Bcdefghijklmnopqrstuvwxyza!'
    );
  });
});