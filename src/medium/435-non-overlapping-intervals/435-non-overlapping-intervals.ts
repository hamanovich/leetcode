// https://leetcode.com/problems/non-overlapping-intervals/

export const eraseOverlapIntervals = (intervals: number[][]): number => {
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let i = 0;

  while (intervals.length >= i && intervals[i + 1]) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      intervals.splice(i + 1, 1);
      i--;
      count++;
    }

    i++;
  }

  return count;
};
