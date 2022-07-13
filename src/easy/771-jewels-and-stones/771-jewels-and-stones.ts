// https://leetcode.com/problems/jewels-and-stones/

export const numJewelsInStones = (jewels: string, stones: string): number => {
  const set: Set<string> = new Set(jewels);
  let count = 0;

  for (const s of stones) if (set.has(s)) count++;

  return count;
};
