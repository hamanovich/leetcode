import { hammingDistance } from './461-hamming-distance';

describe('hammingDistance', () => {
  test('Input: x = 1, y = 4; Output: 2', () => {
    expect(hammingDistance(1, 4)).toBe(2);
  });

  test('Input: x = 3, y = 1; Output: 1', () => {
    expect(hammingDistance(3, 1)).toBe(1);
  });
});
