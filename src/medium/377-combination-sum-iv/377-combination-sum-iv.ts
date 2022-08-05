// https://leetcode.com/problems/combination-sum-iv/

export const combinationSum4 = (nums: number[], target: number, memo: Record<number, number> = {}): number => {
  if (target == 0) return 1;
  if (memo[target]) return memo[target];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (target >= nums[i]) count += combinationSum4(nums, target - nums[i], memo);
  }

  memo[target] = count;

  return count;
};
