import { threeSum } from './15-3sum';

describe('threeSum', () => {
  test('[-1,0,1,2,-1,-4]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  test('[-1,0,1,2,-1,-4,-2,-3,3,0,4]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toStrictEqual([
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('[]', () => {
    expect(threeSum([])).toStrictEqual([]);
  });

  test('[0]', () => {
    expect(threeSum([0])).toStrictEqual([]);
  });
});
