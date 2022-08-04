// https://leetcode.com/problems/convert-1d-array-into-2d-array/

export const construct2DArray = (original: number[], m: number, n: number): number[][] => {
  if (original.length !== m * n) return [];

  const result: number[][] = [];
  let arr: number[] = [];

  for (let i = 0; i < original.length; i++) {
    arr.push(original[i]);

    if (arr.length === n) {
      result.push(arr);
      arr = [];
    }
  }

  return result;
};
