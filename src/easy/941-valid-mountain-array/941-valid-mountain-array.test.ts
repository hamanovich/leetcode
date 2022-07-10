import { validMountainArray } from './941-valid-mountain-array';

describe('validMountainArray', () => {
  test('Input: arr = [2,1]; Output: false', () => {
    expect(validMountainArray([2, 1])).toBeFalsy();
  });

  test('Input: arr = [0,3,2,1]; Output: true', () => {
    expect(validMountainArray([0, 3, 2, 1])).toBeTruthy();
  });

  test('Input: arr = [2,0,2]; Output: false', () => {
    expect(validMountainArray([2, 0, 2])).toBeFalsy();
  });

  test('Input: arr = [0,2,3,4,5,2,1,0]; Output: true', () => {
    expect(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])).toBeTruthy();
  });

  test('Input: arr = [3,5,5]; Output: false', () => {
    expect(validMountainArray([3, 5, 5, 5])).toBeFalsy();
  });
});
