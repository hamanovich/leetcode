// https://leetcode.com/problems/fair-candy-swap//

export const fairCandySwap = (aliceSizes: number[], bobSizes: number[]): number[] => {
  const sumAlice = aliceSizes.reduce((acc, cur) => acc + cur);
  const sumBob = bobSizes.reduce((acc, cur) => acc + cur);
  const diff = (sumAlice - sumBob) / 2;
  const set: Set<number> = new Set(aliceSizes);

  for (const candy of bobSizes) {
    if (set.has(candy + diff)) return [candy + diff, candy];
  }

  return [];
};
