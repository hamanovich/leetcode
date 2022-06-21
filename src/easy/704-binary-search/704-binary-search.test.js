import { search } from './704-binary-search';

describe('search', () => {
  test('nums = [-1,0,3,5,9,12], target = 9', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test('nums = [-1,0,3,5,9,12], target = 2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});
