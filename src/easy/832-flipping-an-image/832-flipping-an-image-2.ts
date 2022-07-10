// https://leetcode.com/problems/flipping-an-image/

export const flipAndInvertImage = (image: number[][]): number[][] => {
  for (const row in image) image[row] = image[row].reverse().map(x => 1 - x);

  return image;
};
