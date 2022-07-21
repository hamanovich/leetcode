// https://leetcode.com/problems/excel-sheet-column-number/

export const titleToNumber = (columnTitle: string): number => {
  let total = 0;

  for (let i = 0; i < columnTitle.length; i += 1)
    total = total * 26 + columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

  return total;
};
