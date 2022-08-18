// https://leetcode.com/problems/letter-tile-possibilities/

export const numTilePossibilities = (tiles: string): number => {
  const t = tiles.split('').sort((a, b) => a.localeCompare(b));

  const dfs = (tiles: string[], count = 0): number => {
    let prev = '';

    for (let i = 0; i < tiles.length; i++) {
      const current = tiles[i];

      if (prev === current) continue;

      prev = current;

      tiles.splice(i, 1);
      count = dfs(tiles, count + 1);
      tiles.splice(i, 0, current);
    }

    return count;
  };

  return dfs(t);
};
