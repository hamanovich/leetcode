/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = nums => {
  const result = [];
  /**
   * @param {number[]} current
   * @param {number[]} rest
   */
  const dfs = (current, rest) => {
    if (!rest.length) return result.push(current);

    for (let i = 0; i < rest.length; i++) {
      dfs([...current, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };

  dfs([], nums);

  return result;
};

permute([1, 2, 3]);
