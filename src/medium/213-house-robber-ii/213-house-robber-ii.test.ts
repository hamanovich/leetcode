import { rob } from './213-house-robber-ii';

describe('rob', () => {
  test('Input: nums = []; Output: 0', () => {
    expect(rob([])).toBe(0);
  });

  test('Input: nums = [2]; Output: 2', () => {
    expect(rob([2])).toBe(2);
  });

  test('Input: nums = [0,0]; Output: 0', () => {
    expect(rob([0, 0])).toBe(0);
  });

  test('Input: nums = [2,3,2]; Output: 3', () => {
    expect(rob([2, 3, 2])).toBe(3);
  });

  test('Input: nums = [1,2,3,1]; Output: 4', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  test('Input: nums = [1,2,3]; Output: 3', () => {
    expect(rob([1, 2, 3])).toBe(3);
  });
});
