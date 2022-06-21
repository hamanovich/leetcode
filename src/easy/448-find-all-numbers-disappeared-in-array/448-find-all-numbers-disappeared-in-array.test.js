import { findDisappearedNumbers } from './448-find-all-numbers-disappeared-in-array';
import { findDisappearedNumbers as findDisappearedNumbers2 } from './448-find-all-numbers-disappeared-in-array-2';
import { findDisappearedNumbers as findDisappearedNumbers3 } from './448-find-all-numbers-disappeared-in-array-3';

describe('findDisappearedNumbers', () => {
  test('nums = [4,3,2,7,8,2,3,1]', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([5, 6]);
    expect(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([5, 6]);
    expect(findDisappearedNumbers3([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([5, 6]);
  });

  test('nums = [1,1]', () => {
    expect(findDisappearedNumbers([1, 1])).toStrictEqual([2]);
    expect(findDisappearedNumbers2([1, 1])).toStrictEqual([2]);
    expect(findDisappearedNumbers3([1, 1])).toStrictEqual([2]);
  });
});
