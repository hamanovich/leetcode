// https://leetcode.com/problems/summary-ranges/

export const summaryRanges = (nums: number[]): string[] => {
  let count = 0;
  const output = [];
  nums.push(Infinity);

  for (let i = 1; i < nums.length; i++)
    if (nums[i] - nums[count] !== i - count) {
      if (i - count > 1) output.push(`${nums[count]}->${nums[i - 1]}`);
      else output.push(nums[count].toString());

      count = i;
    }

  return output;
};
