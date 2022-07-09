// https://leetcode.com/problems/move-zeroes/

export const moveZeroes = (nums: number[]): void => {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
};
