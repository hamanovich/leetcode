import { intervalIntersection } from './986-interval-list-intersections';
import { intervalIntersection as intervalIntersection2 } from './986-interval-list-intersections-2';

describe('intervalIntersection', () => {
  test('Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]; Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]', () => {
    expect(
      intervalIntersection(
        [
          [0, 2],
          [5, 10],
          [13, 23],
          [24, 25],
        ],
        [
          [1, 5],
          [8, 12],
          [15, 24],
          [25, 26],
        ]
      )
    ).toStrictEqual([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ]);

    expect(
      intervalIntersection2(
        [
          [0, 2],
          [5, 10],
          [13, 23],
          [24, 25],
        ],
        [
          [1, 5],
          [8, 12],
          [15, 24],
          [25, 26],
        ]
      )
    ).toStrictEqual([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ]);
  });

  test('Input: firstList = [[1,3],[5,9]], secondList = []; Output: []', () => {
    expect(
      intervalIntersection(
        [
          [1, 3],
          [5, 9],
        ],
        []
      )
    ).toStrictEqual([]);

    expect(
      intervalIntersection2(
        [
          [1, 3],
          [5, 9],
        ],
        []
      )
    ).toStrictEqual([]);
  });

  test('Input: firstList = [[1,3],[5,9]], secondList = [[4,4],[10,20]]; Output: []', () => {
    expect(
      intervalIntersection(
        [
          [1, 3],
          [5, 9],
        ],
        [
          [4, 4],
          [10, 20],
        ]
      )
    ).toStrictEqual([]);

    expect(
      intervalIntersection2(
        [
          [1, 3],
          [5, 9],
        ],
        [
          [4, 4],
          [10, 20],
        ]
      )
    ).toStrictEqual([]);
  });
});
