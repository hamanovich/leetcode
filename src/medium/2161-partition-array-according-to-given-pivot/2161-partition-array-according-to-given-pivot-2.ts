// https://leetcode.com/problems/partition-array-according-to-given-pivot/

export const pivotArray = (nums: number[], pivot: number): number[] => {
  const sm: number[] = [];
  const eq: number[] = [];
  const lg: number[] = [];

  for (const num of nums) {
    if (num < pivot) sm.push(num);
    else if (num === pivot) eq.push(num);
    else lg.push(num);
  }

  return [...sm, ...eq, ...lg];
};
