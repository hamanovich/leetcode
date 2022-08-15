// https://leetcode.com/problems/jump-game/

export const canJump = (nums: number[]): boolean => {
  let last = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= last) last = i;
  }

  return last === 0;
};
