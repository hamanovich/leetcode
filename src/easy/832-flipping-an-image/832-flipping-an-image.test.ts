import { flipAndInvertImage } from './832-flipping-an-image';
import { flipAndInvertImage as flipAndInvertImage2 } from './832-flipping-an-image-2';

describe('flipAndInvertImage', () => {
  test('Input: image = [[1,1,0],[1,0,1],[0,0,0]]; Output:[[1,0,0],[0,1,0],[1,1,1]]', () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ])
    ).toStrictEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);

    expect(
      flipAndInvertImage2([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ])
    ).toStrictEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
  });

  test('Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]; Output:[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]', () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
      ])
    ).toStrictEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);

    expect(
      flipAndInvertImage2([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
      ])
    ).toStrictEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});
