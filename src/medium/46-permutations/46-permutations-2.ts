export const permute = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const dfs = (current: number[], rest: number[]): void => {
    if (!rest.length) {
      result.push(current);
      return;
    }

    for (let i = 0; i < rest.length; i++) {
      dfs([...current, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };

  dfs([], nums);

  return result;
};
