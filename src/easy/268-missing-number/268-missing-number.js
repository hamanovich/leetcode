/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = nums => {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;
  const sumReduce = nums.reduce((a, b) => a + b);

  return sum - sumReduce;
};
