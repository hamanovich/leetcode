import { searchMatrix } from './74-search-a-2d-matrix';

describe('searchMatrix', () => {
  test('Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3; Output: true', () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3
      )
    ).toBeTruthy();
  });

  test('Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13; Output: false', () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13
      )
    ).toBeFalsy();
  });

  test('Input: matrix = [[1,3]], target = 3; Output: true', () => {
    expect(searchMatrix([[1, 3]], 3)).toBeTruthy();
  });

  test('Input: matrix = [[1]], target = 1; Output: true', () => {
    expect(searchMatrix([[1]], 1)).toBeTruthy();
  });

  test('Input: matrix = [[1]], target = 0; Output: false', () => {
    expect(searchMatrix([[1]], 0)).toBeFalsy();
  });
});
