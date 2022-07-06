import { NumArray } from './303-range-sum-query-immutable';

describe('NumArray', () => {
  test('[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(numArray.sumRange(0, 2)).toBe(1);
    expect(numArray.sumRange(2, 5)).toBe(-1);
    expect(numArray.sumRange(0, 5)).toBe(-3);
  });
});
