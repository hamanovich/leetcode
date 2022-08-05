import { combinationSum4 } from './377-combination-sum-iv';
import { combinationSum4 as combinationSum4Two } from './377-combination-sum-iv-2';

describe('combinationSum4', () => {
  test('Input: nums = [1,2,3], target = 4; Output: 7', () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7);
    expect(combinationSum4Two([1, 2, 3], 4)).toBe(7);
  });

  test('Input: nums = [9], target = 3; Output: 0', () => {
    expect(combinationSum4([9], 3)).toBe(0);
    expect(combinationSum4Two([9], 3)).toBe(0);
  });
});
