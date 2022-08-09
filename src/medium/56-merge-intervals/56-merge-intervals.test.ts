import { merge } from './56-merge-intervals';

describe('merge', () => {
  test('Input: intervals = [[1,3],[2,6],[8,10],[15,18]]; Output: [[1,6],[8,10],[15,18]]', () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test('Input: intervals = [[1,4],[4,5]]; Output: [[1,5]]', () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([[1, 5]]);
  });

  test('Input: intervals = [[1,4],[0,4]]; Output: [[0,4]]', () => {
    expect(
      merge([
        [1, 4],
        [0, 4],
      ])
    ).toEqual([[0, 4]]);
  });

  test('Input: intervals = [[1,4],[2,3]]; Output: [[1,4]]', () => {
    expect(
      merge([
        [1, 4],
        [2, 3],
      ])
    ).toEqual([[1, 4]]);
  });

  test('Input: intervals = [[1,4],[0,2],[3,5]]; Output: [[0,5]]', () => {
    expect(
      merge([
        [1, 4],
        [0, 2],
        [3, 5],
      ])
    ).toEqual([[0, 5]]);
  });

  test('Input: intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]; Output: [[1,10]]', () => {
    expect(
      merge([
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10],
      ])
    ).toEqual([[1, 10]]);
  });

  test('Input: intervals = [[3,5],[6,7],[8,10], [4,8]]; Output: [[3,10]]', () => {
    expect(
      merge([
        [3, 5],
        [6, 7],
        [8, 10],
        [4, 8],
      ])
    ).toEqual([[3, 10]]);
  });
});
