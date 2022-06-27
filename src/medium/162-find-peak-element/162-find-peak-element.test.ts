import { findPeakElement } from './162-find-peak-element';
import { findPeakElement as findPeakElement2 } from './162-find-peak-element-2';

describe('findPeakElement', () => {
  test('nums = [1,2,3,1]', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
    expect(findPeakElement2([1, 2, 3, 1])).toBe(2);
  });

  test('nums = [1,2,1,3,5,6,4]', () => {
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
    expect(findPeakElement2([1, 2, 1, 3, 5, 6, 4])).toBe(1);
  });

  test('nums = [1,2,3]', () => {
    expect(findPeakElement([])).toBe(0);
    expect(findPeakElement2([])).toBe(-1);
  });
});
