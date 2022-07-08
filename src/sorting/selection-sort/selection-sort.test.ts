import { selectionSort } from './selection-sort';

describe('selectionSort', () => {
  test('arr = [64, 34, 25, 12, 22, 11, 90]; Output = [11, 12, 22, 25, 34, 64, 90]', () => {
    expect(selectionSort([64, 34, 25, 12, 22, 11, 90])).toStrictEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  test('arr = [3, 2, 1]; Output = [1, 2, 3]', () => {
    expect(selectionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  });

  test('arr = [1, 1]; Output = [1, 1]', () => {
    expect(selectionSort([1, 1])).toStrictEqual([1, 1]);
  });
});
