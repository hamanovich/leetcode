import { quickSort } from './quick-sort';

describe('quickSort', () => {
  test('arr = [1, 3, 7, 8, 2, 5, 6, 4]; Output = [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    expect(quickSort([1, 3, 7, 8, 2, 5, 6, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  test('arr = [64, 34, 25, 12, 22, 11, 90]; Output = [11, 12, 22, 25, 34, 64, 90]', () => {
    expect(quickSort([64, 34, 25, 12, 22, 11, 90])).toStrictEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  test('arr = [3, 2, 1]; Output = [1, 2, 3]', () => {
    expect(quickSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  });

  test('arr = [1]; Output = [1]', () => {
    expect(quickSort([1])).toStrictEqual([1]);
  });
});
