// https://leetcode.com/problems/reverse-words-in-a-string-iii/

export const reverseWords = (s: string): string => {
  const sentence = s.split(' ');
  const output: string[] = [];

  for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i].split('');
    let left = 0;
    let right = word.length - 1;

    while (left <= right) {
      [word[left], word[right]] = [word[right], word[left]];
      left++;
      right--;
    }
    output.push(word.join(''));
  }

  return output.join(' ');
};
