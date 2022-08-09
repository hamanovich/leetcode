import { kClosest } from './973-k-closest-points-to-origin';

describe('kClosest', () => {
  test('Input: points = [[1,3],[-2,2]], k = 1; Output: [[-2,2]]', () => {
    expect(
      kClosest(
        [
          [1, 3],
          [-2, 2],
        ],
        1
      )
    ).toEqual([[-2, 2]]);
  });

  test('Input: points = [[3,3],[5,-1],[-2,4]], k = 2; Output: [[3,3],[-2,4]]', () => {
    expect(
      kClosest(
        [
          [3, 3],
          [5, -1],
          [-2, 4],
        ],
        2
      )
    ).toEqual([
      [3, 3],
      [-2, 4],
    ]);
  });
});
