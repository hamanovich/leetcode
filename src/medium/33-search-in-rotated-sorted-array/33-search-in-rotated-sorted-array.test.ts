import { search } from './33-search-in-rotated-sorted-array';

describe('search', () => {
  test('Input: nums = [4,5,6,7,0,1,2], target = 0; Output: 4', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test('Input: nums = [4,5,6,7,0,1,2], target = 5; Output: 1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
  });

  test('Input: nums = [7,0,1,2], target = 2; Output: 3', () => {
    expect(search([7, 0, 1, 2], 2)).toBe(3);
  });

  test('Input: nums = [7,0,1,2], target = 7; Output: 0', () => {
    expect(search([7, 0, 1, 2], 7)).toBe(0);
  });

  test('Input: nums = [4,5,6,7,0,1,2], target = 3; Output: -1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test('Input: nums = [1], target = 0; Output: -1', () => {
    expect(search([1], 0)).toBe(-1);
  });
});
