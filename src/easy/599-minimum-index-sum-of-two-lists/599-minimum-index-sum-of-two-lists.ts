// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

export const findRestaurant = (list1: string[], list2: string[]): string[] => {
  let output: string[] = [];
  const rest: Record<string, number> = {};
  let min = Infinity;

  for (let i = 0; i < list1.length; i++) {
    rest[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    if (!(list2[i] in rest)) continue;

    if (rest[list2[i]] + i < min) {
      output = [list2[i]];
      min = rest[list2[i]] + i;
    } else if (rest[list2[i]] + i === min) output.push(list2[i]);
  }

  return output;
};
