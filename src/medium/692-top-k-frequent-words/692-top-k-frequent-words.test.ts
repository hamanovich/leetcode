import { topKFrequent } from './692-top-k-frequent-words';

describe('topKFrequent', () => {
  test('Input: words = ["i","love","leetcode","i","love","coding"], k = 2; Output: ["i","love"]', () => {
    expect(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2)).toStrictEqual(['i', 'love']);
  });

  test('Input: words = ["i","love","leetcode","i","love","coding"], k = 3; Output: ["i","love","coding"]', () => {
    expect(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3)).toStrictEqual(['i', 'love', 'coding']);
  });

  test('Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4; Output: ["the","is","sunny","day"]', () => {
    expect(topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4)).toStrictEqual([
      'the',
      'is',
      'sunny',
      'day',
    ]);
  });
});
