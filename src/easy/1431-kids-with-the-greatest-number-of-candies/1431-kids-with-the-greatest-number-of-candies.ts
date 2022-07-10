// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

export const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
  const output: boolean[] = [];
  const max = Math.max(...candies);

  for (const c of candies) output.push(c + extraCandies >= max);

  return output;
};
