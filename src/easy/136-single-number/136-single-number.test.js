import { singleNumber } from './136-single-number';
import { singleNumber as singleNumber2 } from './136-single-number-2';

describe('singleNumber', () => {
  test('nums = [2,2,1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber2([2, 2, 1])).toBe(1);
  });

  test('nums = [4,1,2,1,2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    expect(singleNumber2([4, 1, 2, 1, 2])).toBe(4);
  });

  test('nums = [1]', () => {
    expect(singleNumber([1])).toBe(1);
    expect(singleNumber2([1])).toBe(1);
  });
});
