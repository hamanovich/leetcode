// https://leetcode.com/problems/interval-list-intersections/

export const intervalIntersection = (firstList: number[][], secondList: number[][]): number[][] => {
  let int1 = 0;
  let int2 = 0;
  const res: number[][] = [];

  while (int1 < firstList.length && int2 < secondList.length) {
    const start = Math.max(firstList[int1][0], secondList[int2][0]);
    const end = Math.min(firstList[int1][1], secondList[int2][1]);

    if (start <= end) res.push([start, end]);

    if (firstList[int1][1] < secondList[int2][1]) int1++;
    else int2++;
  }

  return res;
};
