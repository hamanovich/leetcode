import { setZeroes } from './73-set-matrix-zeroes';

describe('setZeroes', () => {
  test('Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]; Output: [[1,0,1],[0,0,0],[1,0,1]]', () => {
    const input = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const output = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    setZeroes(input);

    expect(input).toEqual(output);
  });

  test('Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]', () => {
    const input = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    const output = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ];
    setZeroes(input);

    expect(input).toEqual(output);
  });
});
