import {
  findDisappearedNumbers,
  findDisappearedNumbers2,
  findDisappearedNumbers3,
} from './448-find-all-numbers-disappeared-in-array';

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
