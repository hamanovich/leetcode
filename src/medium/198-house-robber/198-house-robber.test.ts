import { rob } from './198-house-robber';
import { rob as rob2 } from './198-house-robber-2';

describe('rob', () => {
  test('Input: nums = [1,2,3,1]; Output: 4', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob2([1, 2, 3, 1])).toBe(4);
  });

  test('Input: nums = [2,7,9,3,1]; Output: 12', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
    expect(rob2([2, 7, 9, 3, 1])).toBe(12);
  });

  test('Input: nums = [2,1,2,1,1,2]; Output: 6', () => {
    expect(rob([2, 1, 2, 1, 1, 2])).toBe(6);
    expect(rob2([2, 1, 2, 1, 1, 2])).toBe(6);
  });
});
