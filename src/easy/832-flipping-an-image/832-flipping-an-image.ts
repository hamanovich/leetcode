// https://leetcode.com/problems/flipping-an-image/

export const flipAndInvertImage = (image: number[][]): number[][] => {
  for (const row of image) {
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      [row[left], row[right]] = [row[right], row[left]];
      row[left] = row[left] ? 0 : 1;

      if (left !== right) row[right] = row[right] ? 0 : 1;

      left++;
      right--;
    }
  }

  return image;
};
