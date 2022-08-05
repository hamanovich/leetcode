import { eraseOverlapIntervals } from './435-non-overlapping-intervals';
import { eraseOverlapIntervals as eraseOverlapIntervals2 } from './435-non-overlapping-intervals-2';

describe('eraseOverlapIntervals', () => {
  test('Input: intervals = [[1,2],[2,3],[3,4],[1,3]]; Output: 1', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ])
    ).toBe(1);

    expect(
      eraseOverlapIntervals2([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ])
    ).toBe(1);
  });

  test('Input: intervals = [[1,2],[1,2],[1,2]]; Output: 2', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ])
    ).toBe(2);

    expect(
      eraseOverlapIntervals2([
        [1, 2],
        [1, 2],
        [1, 2],
      ])
    ).toBe(2);
  });

  test('Input: intervals = [[1,2],[2,3]]; Output: 0', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
      ])
    ).toBe(0);

    expect(
      eraseOverlapIntervals2([
        [1, 2],
        [2, 3],
      ])
    ).toBe(0);
  });

  test('Input: intervals = [[1,100],[11,22],[1,11],[2,12]]; Output: 2', () => {
    expect(
      eraseOverlapIntervals([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
      ])
    ).toBe(2);

    expect(
      eraseOverlapIntervals2([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
      ])
    ).toBe(2);
  });
});
