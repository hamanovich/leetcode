import { threeSum } from './15-3sum';

describe('threeSum', () => {
  test('Input: nums = [-1,0,1,2,-1,-4]; Output: [[-1,-1,2],[-1,0,1]]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('Input: nums = [-1,0,1,1,2,-1,-4]; Output: [[-1,-1,2],[-1,0,1]]', () => {
    expect(threeSum([-1, 0, 1, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('[-1,0,1,2,-1,-4,-2,-3,3,0,4]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toStrictEqual([
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('Input: nums = []; Output: []', () => {
    expect(threeSum([])).toStrictEqual([]);
  });

  test('Input: nums = [0]; Output: []', () => {
    expect(threeSum([0])).toStrictEqual([]);
  });
});
