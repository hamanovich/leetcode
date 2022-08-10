import { topKFrequent } from './347-top-k-frequent-elements';
import { topKFrequent as topKFrequent2 } from './347-top-k-frequent-elements-2';

describe('topKFrequent', () => {
  test('Input: nums = [1,1,1,2,2,3], k = 2; Output: [1,2]', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent2([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('Input: nums = [1], k = 1; Output: [1]', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
    expect(topKFrequent2([1], 1)).toEqual([1]);
  });

  test('Input: nums = [1,2], k = 2; Output: [1,2]', () => {
    expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
    expect(topKFrequent2([1, 2], 2)).toEqual([1, 2]);
  });
});
