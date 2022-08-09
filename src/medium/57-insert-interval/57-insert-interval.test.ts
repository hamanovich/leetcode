import { insert } from './57-insert-interval';

describe('insert', () => {
  test('Input: intervals = [[1,3],[6,9]], newInterval = [2,5]; Output: [[1,5],[6,9]]', () => {
    expect(
      insert(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5]
      )
    ).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  test('Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]; Output: [[1,2],[3,10],[12,16]]', () => {
    expect(
      insert(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8]
      )
    ).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });
});
