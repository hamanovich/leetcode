import { mergeSort } from './merge-sort';

describe('mergeSort', () => {
  test('arr = [1, 3, 7, 8, 2, 5, 6, 4]; Output = [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    expect(mergeSort([1, 3, 7, 8, 2, 5, 6, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  test('arr = [64, 34, 25, 12, 22, 11, 90]; Output = [11, 12, 22, 25, 34, 64, 90]', () => {
    expect(mergeSort([64, 34, 25, 12, 22, 11, 90])).toStrictEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  test('arr = [3, 2, 1]; Output = [1, 2, 3]', () => {
    expect(mergeSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  });

  test('arr = [1]; Output = [1]', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
  });
});
