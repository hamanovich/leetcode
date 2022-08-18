import { combinationSum } from './39-combination-sum';

describe('combinationSum', () => {
  test('Input: candidates = [2,3,6,7], target = 7; Output: [[2,2,3],[7]]', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });

  test('Input: candidates = [2,3,5], target = 8; Output: [[2,2,2,2],[2,3,3],[3,5]]', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  test('Input: candidates = [2], target = 1; Output: []', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });
});
