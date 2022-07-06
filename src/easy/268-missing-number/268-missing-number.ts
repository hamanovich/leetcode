export const missingNumber = (nums: number[]): number => {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;
  const sumReduce = nums.reduce((a, b) => a + b);

  return sum - sumReduce;
};
