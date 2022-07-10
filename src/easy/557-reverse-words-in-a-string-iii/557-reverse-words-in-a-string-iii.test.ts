import { reverseWords } from './557-reverse-words-in-a-string-iii';
import { reverseWords as reverseWords2 } from './557-reverse-words-in-a-string-iii-2';

describe('reverseWords', () => {
  test(`Input: s = "Let's take LeetCode contest"; Output: "s'teL ekat edoCteeL tsetnoc"`, () => {
    expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
    expect(reverseWords2("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
  });

  test(`Input: s = "God Ding"; Output: "doG gniD"`, () => {
    expect(reverseWords('God Ding')).toBe('doG gniD');
    expect(reverseWords2('God Ding')).toBe('doG gniD');
  });
});
