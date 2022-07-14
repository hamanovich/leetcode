// https://leetcode.com/problems/interval-list-intersections/

export const intervalIntersection = (firstList: number[][], secondList: number[][]): number[][] => {
  const output: number[][] = [];

  const helper = (arr: number[]) => {
    const res = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) res.push(i);
    return res;
  };

  const intersect = (arr1: number[], arr2: number[]) => arr1.filter((x: number) => arr2.includes(x));

  while (firstList.length && secondList.length) {
    const int1 = firstList[0];
    const int2 = secondList[0];
    const merge: number[] = intersect(helper(int1), helper(int2));

    if (!merge.length) {
      if (int1[0] > int2[1]) secondList.shift();
      else firstList.shift();
      continue;
    }

    const res: number[] = [merge[0], merge[merge.length - 1]];

    output.push(res);

    if (res[1] >= int1[1]) firstList.shift();
    if (res[1] >= int2[1]) secondList.shift();
  }

  return output;
};
