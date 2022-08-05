// https://leetcode.com/problems/non-overlapping-intervals/

export const eraseOverlapIntervals = (intervals: number[][]): number => {
  intervals.sort((a, b) => a[1] - b[1]);

  let prev = intervals[0];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) count++;
    else prev = intervals[i];
  }
  return count;
};
