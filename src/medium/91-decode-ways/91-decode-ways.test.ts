import { numDecodings } from './91-decode-ways';

describe('numDecodings', () => {
  test('Input: s = "12"; Output: 2', () => {
    expect(numDecodings('12')).toBe(2);
  });

  test('Input: s = "226"; Output: 3', () => {
    expect(numDecodings('226')).toBe(3);
  });

  test('Input: s = "06"; Output: 0', () => {
    expect(numDecodings('06')).toBe(0);
  });

  test('Input: s = ""; Output: 0', () => {
    expect(numDecodings('')).toBe(0);
  });
});
