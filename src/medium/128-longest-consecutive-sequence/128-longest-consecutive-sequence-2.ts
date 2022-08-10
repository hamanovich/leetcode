// https://leetcode.com/problems/longest-consecutive-sequence/

export const longestConsecutive = (nums: number[]): number => {
  let max = 0;
  const lens: Record<number, number> = {};

  for (const num of nums) {
    if (lens[num]) continue;

    const l = lens[num - 1] || 0;
    const r = lens[num + 1] || 0;
    const len = l + r + 1;

    lens[num - l] = len;
    lens[num] = len;
    lens[num + r] = len;

    max = Math.max(max, len);
  }

  return max;
};
