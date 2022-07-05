// https://leetcode.com/problems/top-k-frequent-words/

export const topKFrequent = (words: string[], k: number): string[] => {
  const hash: Record<string, number> = {};

  for (const word of words) hash[word] = hash[word] + 1 || 1;

  return Object.keys(hash)
    .sort((a, b) => {
      const countCompare = hash[b] - hash[a];

      if (!countCompare) return a.localeCompare(b);
      else return countCompare;
    })
    .slice(0, k);
};
