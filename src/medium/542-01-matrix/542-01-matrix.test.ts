import { updateMatrix } from './542-01-matrix';

describe('updateMatrix', () => {
  test('Input: mat = [[0,0,0],[0,1,0],[0,0,0]]; Output: [[0,0,0],[0,1,0],[0,0,0]]', () => {
    expect(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  test('Input: mat = [[0,0,0],[0,1,0],[1,1,1]]; Output: [[0,0,0],[0,1,0],[1,2,1]]', () => {
    expect(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ])
    ).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ]);
  });
});
