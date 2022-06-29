// BFS - binary-first Search

const follow = (r: number, c: number, grid: string[][]) => {
  const queue = [[r, c]];
  grid[r][c] = '0';

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const [row, col] = queue.pop() as number[];

      for (const [x, y] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ]) {
        const iRow = row + x;
        const iCol = col + y;

        if (iRow < 0 || iRow >= grid.length || iCol < 0 || iCol >= grid[0].length || grid[iRow][iCol] !== '1') continue;

        grid[iRow][iCol] = '0';
        queue.unshift([iRow, iCol]);
      }
    }
  }
};

export const numIslands = (grid: string[][]): number => {
  let result = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        result++;
        follow(r, c, grid);
      }
    }
  }
  return result;
};
