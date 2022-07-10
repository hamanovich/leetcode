// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

export const removeDuplicates = (s: string): string => {
  const stack: string[] = [s[0]];
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (stack[count] === s[i]) {
      stack.pop();
      count--;
    } else {
      stack.push(s[i]);
      count++;
    }
  }

  return stack.join('');
};
