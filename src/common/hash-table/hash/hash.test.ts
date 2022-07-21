import { hash } from './hash';

describe('hash', () => {
  test('hash function', () => {
    expect(hash('a')).toBe(1);
    expect(hash('b')).toBe(2);
    expect(hash('abc')).toBe(6);
  });
});
