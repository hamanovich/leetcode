// https://leetcode.com/problems/last-stone-weight/

export const lastStoneWeight = (stones: number[]): number => {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    stones[1] = stones[0] - stones[1];
    stones.shift();
  }

  return stones[0];
};
