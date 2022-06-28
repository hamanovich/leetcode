export const lengthOfLongestSubstring = (s: string): number => {
  let max = 0;
  let str = '';

  for (let i = 0; i < s.length; i++) {
    let index = -1;
    const temp = s[i];

    index = str.indexOf(temp);

    if (index > -1) {
      str = str.substring(index + 1);
    }

    str += temp;
    max = Math.max(max, str.length);
  }

  return max;
};
