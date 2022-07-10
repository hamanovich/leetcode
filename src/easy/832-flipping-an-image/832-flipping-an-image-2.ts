// https://leetcode.com/problems/flipping-an-image/

export const flipAndInvertImage = (image: number[][]): number[][] => {
  const output: number[][] = [];

  for (const row of image) output.push(row.reverse().map(x => 1 - x));

  return output;
};
