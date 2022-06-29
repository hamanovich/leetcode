// DFS - Depth First Search

const follow = (row: number, col: number, grid: string[][]) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') return;

  grid[row][col] = '0';

  follow(row, col + 1, grid);
  follow(row, col - 1, grid);
  follow(row + 1, col, grid);
  follow(row - 1, col, grid);
};

export const numIslands = (grid: string[][]): number => {
  let result = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        result++;
        follow(row, col, grid);
      }
    }
  }

  return result;
};
