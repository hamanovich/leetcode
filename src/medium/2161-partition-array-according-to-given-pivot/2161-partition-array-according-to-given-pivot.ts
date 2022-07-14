// https://leetcode.com/problems/partition-array-according-to-given-pivot/

export const pivotArray = (nums: number[], pivot: number): number[] => {
  const len = nums.length;
  const sm: number[] = [];
  const lg: number[] = [];
  const pv: number[] = [];
  let i = 0;

  while (i !== len) {
    if (nums[0] < pivot) sm.push(nums[0]);
    else if (nums[0] > pivot) lg.push(nums[0]);
    else pv.push(nums[0]);

    nums.shift();
    i++;
  }

  return [...sm, ...pv, ...lg];
};
