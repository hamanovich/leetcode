import { mergeAlternately } from './1768-merge-strings-alternately';

describe('mergeAlternately', () => {
  test('Input: word1 = "abc", word2 = "pqr"; Output: "apbqcr"', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
  });

  test('Input: word1 = "ab", word2 = "pqrs"; Output: "apbqrs"', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
  });

  test('Input: word1 = "abcd", word2 = "pq"; Output: "apbqcd"', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });
});
