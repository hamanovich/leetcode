export const sortedSquares = (nums: number[]): number[] => {
  const result = [];
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index] = nums[left] ** 2;
      index--;
      left++;
    } else {
      result[index] = nums[right] ** 2;
      index--;
      right--;
    }
  }

  return result;
};
