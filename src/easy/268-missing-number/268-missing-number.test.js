import { missingNumber, missingNumber2 } from './268-missing-number';

describe('missingNumber', () => {
  test('nums = [3,0,1]', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
    expect(missingNumber2([3, 0, 1])).toBe(2);
  });

  test('nums = [0,1]', () => {
    expect(missingNumber([0, 1])).toBe(2);
    expect(missingNumber2([0, 1])).toBe(2);
  });

  test('nums = [0]', () => {
    expect(missingNumber([0])).toBe(1);
    expect(missingNumber2([0])).toBe(1);
  });

  test('nums = [1]', () => {
    expect(missingNumber([1])).toBe(0);
    expect(missingNumber2([1])).toBe(0);
  });

  test('nums = [9,6,4,2,3,5,7,0,1]', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    expect(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
});
