import { sortColors } from './75-sort-colors';

describe('sortColors', () => {
  test('Input: nums = [2,0,2,1,1,0]; Output: [0,0,1,1,2,2]', () => {
    const numsBefore = [2, 0, 2, 1, 1, 0];
    const numsAfter = [0, 0, 1, 1, 2, 2];
    sortColors(numsBefore);
    expect(numsBefore).toEqual(numsAfter);
  });

  test('Input: nums = [2,0,1]; Output: [0,1,2]', () => {
    const numsBefore = [2, 0, 1];
    const numsAfter = [0, 1, 2];
    sortColors(numsBefore);
    expect(numsBefore).toEqual(numsAfter);
  });
});
