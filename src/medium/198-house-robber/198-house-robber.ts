// https://leetcode.com/problems/house-robber/

export const rob = (nums: number[]): number => {
  let prev = 0;
  let next = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = Math.max(nums[i] + prev, next);
    prev = next;
    next = curr;
  }

  return next;
};
