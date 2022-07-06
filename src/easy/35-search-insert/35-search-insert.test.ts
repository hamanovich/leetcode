import { searchInsert } from './35-search-insert';

describe('searchInsert', () => {
  test('[1,3,5,6] target 5', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test('[1,3,5,6] target 2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test('[1,3,5,6] target 7', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  // edge case
  test('[] target 5', () => {
    expect(searchInsert([], 5)).toBe(0);
  });
});
