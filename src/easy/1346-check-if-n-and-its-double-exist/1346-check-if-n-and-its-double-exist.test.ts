import { checkIfExist } from './1346-check-if-n-and-its-double-exist';

describe('checkIfExist', () => {
  test('Input: arr = [10,2,5,3]; Output: true', () => {
    expect(checkIfExist([10, 2, 5, 3])).toBeTruthy();
  });

  test('Input: arr = [7,1,14,11]; Output: true', () => {
    expect(checkIfExist([7, 1, 14, 11])).toBeTruthy();
  });

  test('Input: arr = [3,1,7,11]; Output: false', () => {
    expect(checkIfExist([3, 1, 7, 11])).toBeFalsy();
  });
});
