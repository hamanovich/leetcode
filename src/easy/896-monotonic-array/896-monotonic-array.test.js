import { isMonotonic } from './896-monotonic-array';

describe('isMonotonic', () => {
  test('nums = [1,2,2,3]', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBeTruthy();
  });

  test('nums = [6,5,4,4]', () => {
    expect(isMonotonic([6, 5, 4, 4])).toBeTruthy();
  });

  test('nums = [1,1,1]', () => {
    expect(isMonotonic([1, 1, 1])).toBeTruthy();
  });

  test('nums = [1,3,2]', () => {
    expect(isMonotonic([1, 3, 2])).toBeFalsy();
  });
});
