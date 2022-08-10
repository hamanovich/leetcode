// https://leetcode.com/problems/longest-consecutive-sequence/

export const longestConsecutive = (nums: number[]): number => {
  const set: Set<number> = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (set.has(num - 1)) continue;

    let l = 0;
    while (set.has(num + l)) l++;

    longest = Math.max(l, longest);
  }

  return longest;
};
