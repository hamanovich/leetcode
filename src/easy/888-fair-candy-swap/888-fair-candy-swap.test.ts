import { fairCandySwap } from './888-fair-candy-swap';

describe('fairCandySwap', () => {
  test('Input: aliceSizes = [1,1], bobSizes = [2,2]; Output: [1,2]', () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
  });

  test('Input: aliceSizes = [1,2], bobSizes = [2,3]; Output: [1,2]', () => {
    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
  });

  test('Input: aliceSizes = [2], bobSizes = [1,3]; Output: [2,3]', () => {
    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
  });

  test('Input: aliceSizes = [2], bobSizes = [1]; Output: []', () => {
    expect(fairCandySwap([2], [1])).toEqual([]);
  });
});
