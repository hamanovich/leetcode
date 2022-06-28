import { sortedSquares } from './977-squares-of-a-sorted-array';

describe('sortedSquares', () => {
  test('nums = [-4]', () => {
    expect(sortedSquares([-4])).toStrictEqual([16]);
  });

  test('nums = [-4,-1,0,3,10]', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100]);
  });

  test('nums = [-7,-3,2,3,11]', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toStrictEqual([4, 9, 9, 49, 121]);
  });
});
