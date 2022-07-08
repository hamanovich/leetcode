import { merge } from './merge';

describe('merge', () => {
  test('arr1 = [1,3,7,8], arr2 = [2,4,5,6]; Output = [1,2,3,4,5,6,7,8]', () => {
    expect(merge([1, 3, 7, 8], [2, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
