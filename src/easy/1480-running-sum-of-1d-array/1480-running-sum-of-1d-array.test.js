import { runningSum } from './1480-running-sum-of-1d-array';

describe('runningSum', () => {
  test('nums = [1,2,3,4]', () => {
    expect(runningSum([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
  });

  test('nums = [1,1,1,1,1]', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('nums = [3,1,2,10,1]', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toStrictEqual([3, 4, 6, 16, 17]);
  });
});
