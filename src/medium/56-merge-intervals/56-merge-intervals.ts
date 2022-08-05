// https://leetcode.com/problems/merge-intervals/

export const merge = (intervals: number[][]): number[][] => {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;

  while (intervals.length >= i && intervals[i + 1]) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals.splice(i, 2, [intervals[i][0], Math.max(intervals[i][1], intervals[i + 1][1])]);
      i--;
    }

    i++;
  }

  return intervals;
};
