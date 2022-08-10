// https://leetcode.com/problems/top-k-frequent-elements/

export const topKFrequent = (nums: number[], k: number): number[] => {
  const map: Map<number, number> = new Map();
  const list: Array<Set<number>> = [];
  const result: number[] = [];

  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);
  for (const [num, count] of map) list[count] = (list[count] || new Set()).add(num);
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(...list[i]);

    if (result.length === k) break;
  }

  return result;
};
