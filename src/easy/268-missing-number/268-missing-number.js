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

/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber2 = nums => {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }

  return sum;
};
