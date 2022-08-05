// https://leetcode.com/problems/find-the-duplicate-number/

export const findDuplicate = (nums: number[]): number => {
  const seen: Set<number> = new Set();

  for (const num of nums) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return -1;
};
