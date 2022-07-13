import { sortArrayByParity } from './905-sort-array-by-parity';

describe('sortArrayByParity', () => {
  test('Input: nums = [3,1,2,4]; Output: [2,4,3,1]', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toStrictEqual([4, 2, 3, 1]);
  });

  test('Input: nums = [0]; Output: [0]', () => {
    expect(sortArrayByParity([0])).toStrictEqual([0]);
  });

  test('Input: nums = [0,1,2]; Output: [0,2,1]', () => {
    expect(sortArrayByParity([0, 1, 2])).toStrictEqual([2, 0, 1]);
  });
});
