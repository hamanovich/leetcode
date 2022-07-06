export const missingNumber = (nums: number[]): number => {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }

  return sum;
};
