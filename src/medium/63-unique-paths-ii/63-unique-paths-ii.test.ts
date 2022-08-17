import { uniquePathsWithObstacles } from './63-unique-paths-ii';

describe('uniquePathsWithObstacles', () => {
  test('Input: obstacleGrid = [[1]]; Output: 0', () => {
    expect(uniquePathsWithObstacles([[1]])).toBe(0);
  });
  test('Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]; Output: 2', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toBe(2);
  });

  test('Input: obstacleGrid = [[0,1],[0,0]]; Output: 1', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 1],
        [0, 0],
      ])
    ).toBe(1);
  });
});
