import { majorityElement } from './169-majority-element';
import { majorityElement as majorityElement2 } from './169-majority-element-2';

describe('majorityElement', () => {
  test('nums = [3,2,3]', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement2([3, 2, 3])).toBe(3);
  });

  test('nums = [2,2,1,1,1,2,2]', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    expect(majorityElement2([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
