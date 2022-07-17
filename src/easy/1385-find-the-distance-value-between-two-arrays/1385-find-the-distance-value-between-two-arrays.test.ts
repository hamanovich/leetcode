import { findTheDistanceValue } from './1385-find-the-distance-value-between-two-arrays';

describe('findTheDistanceValue', () => {
  test('Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2; Output: 2', () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
  });

  test('Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3; Output: 2', () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2);
  });

  test('Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6; Output: 1', () => {
    expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1);
  });
});
