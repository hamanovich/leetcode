import { plusOne } from './66-plus-one';
import { plusOne as plusOne2 } from './66-plus-one-2';

describe('plusOne', () => {
  test('Input: digits = [1,2,3]; Output: [1,2,4]', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
    expect(plusOne2([1, 2, 3])).toStrictEqual([1, 2, 4]);
  });

  test('Input: digits = [4,3,2,1]; Output: [4,3,2,2]', () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
    expect(plusOne2([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
  });

  test('Input: digits = [9]; Output: [1,0]', () => {
    expect(plusOne([9])).toStrictEqual([1, 0]);
    expect(plusOne2([9])).toStrictEqual([1, 0]);
  });

  test('Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]; Output: [[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toStrictEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4,
    ]);
    expect(plusOne2([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toStrictEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4,
    ]);
  });
});
