import { getHint } from './299-bulls-and-cows';

describe('getHint', () => {
  test('Input: secret = "1807", guess = "7810"; Output: "1A3B"', () => {
    expect(getHint('1807', '7810')).toBe('1A3B');
  });

  test('Input: secret = "1123", guess = "0111"; Output: "1A1B"', () => {
    expect(getHint('1123', '0111')).toBe('1A1B');
  });
});
