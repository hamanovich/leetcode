import { lastStoneWeight } from './1046-last-stone-weight';

describe('lastStoneWeight', () => {
  test('Input: stones = [2,7,4,1,8,1]; Output: 1', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  test('Input: stones = [1]; Output: 1', () => {
    expect(lastStoneWeight([1])).toBe(1);
  });

  test('Input: stones = [2,2]; Output: 0', () => {
    expect(lastStoneWeight([2, 2])).toBe(0);
  });

  test('Input: stones = [3,7,2]; Output: 2', () => {
    expect(lastStoneWeight([3, 7, 2])).toBe(2);
  });
});
