import { floodFill as floodFillDFS } from './733-flood-fill';
import { floodFill as floodFillBFS } from './733-flood-fill-2';

describe('floodFill', () => {
  test('Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2; Output: [[2,2,2],[2,2,0],[2,0,1]]', () => {
    expect(
      floodFillDFS(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toStrictEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);

    expect(
      floodFillBFS(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toStrictEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });

  test('Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0; Output: [[0,0,0],[0,0,0]]', () => {
    expect(
      floodFillDFS(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0
      )
    ).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);

    expect(
      floodFillBFS(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0
      )
    ).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});
