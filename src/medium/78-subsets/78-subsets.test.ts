import { subsets } from './78-subsets';
import { subsets as subsets2 } from './78-subsets-2';

describe('subsets', () => {
  test('Input: nums = [1,2,3]; Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', () => {
    expect(subsets([1, 2, 3])).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
    expect(subsets2([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  });

  test('Input: nums = [0]; Output: [[],[0]]', () => {
    expect(subsets([0])).toEqual([[], [0]]);
    expect(subsets2([0])).toEqual([[], [0]]);
  });
});
