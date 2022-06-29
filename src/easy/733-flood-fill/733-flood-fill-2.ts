// BFS - Breadth-first search

export const floodFill = (image: number[][], sr: number, sc: number, newColor: number): number[][] => {
  const currColor = image[sr][sc];

  if (currColor === newColor) return image;

  const queue = [[sr, sc]];

  while (queue.length) {
    const [row, col] = queue.shift() as number[];

    if (image[row][col] === currColor) {
      image[row][col] = newColor;

      if (row - 1 >= 0) queue.push([row - 1, col]);
      if (row + 1 < image.length) queue.push([row + 1, col]);
      if (col + 1 < image[0].length) queue.push([row, col + 1]);
      if (col - 1 >= 0) queue.push([row, col - 1]);
    }
  }
  return image;
};
