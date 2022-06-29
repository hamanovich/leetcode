// DFS - Depth First Search

export const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
  firstColor = image[sr][sc]
): number[][] => {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === newColor
  ) {
    return image;
  }

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);

  return image;
};
