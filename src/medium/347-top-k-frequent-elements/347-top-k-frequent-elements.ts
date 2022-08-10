// https://leetcode.com/problems/top-k-frequent-elements/

export const topKFrequent = (nums: number[], k: number): number[] => {
  const hash: Record<string, number> = {};

  for (const num of nums) hash[num] = hash[num] + 1 || 1;

  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .splice(0, k)
    .map(n => Number(n[0]));
};
