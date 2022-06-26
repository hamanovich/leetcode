export const permute = (nums: number[]) => {
  const result: number[][] = [];
  const dfs = (current: number[], rest: number[]) => {
    if (!rest.length) return result.push(current);

    for (let i = 0; i < rest.length; i++) {
      dfs([...current, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };

  dfs([], nums);

  return result;
};
