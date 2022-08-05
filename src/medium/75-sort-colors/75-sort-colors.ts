// https://leetcode.com/problems/sort-colors/

export const sortColors = (nums: number[]): void => {
  for (let i = 1; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j = j - 1;
    }
    nums[j + 1] = key;
  }
};
