// https://leetcode.com/problems/rotate-array/

export const rotate = (nums: number[], k: number): void => {
  const swap = (l: number, r: number): void => {
    while (l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  };

  swap(0, nums.length - 1);
  swap(0, (k % nums.length) - 1);
  swap(k % nums.length, nums.length - 1);
};
