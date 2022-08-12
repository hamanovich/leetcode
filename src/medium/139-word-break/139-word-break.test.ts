import { wordBreak } from './139-word-break';
import { wordBreak as wordBreak2 } from './139-word-break-2';

describe('wordBreak', () => {
  test('Input: s = "leetcode", wordDict = ["leet","code"]; Output: true', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBeTruthy();
    expect(wordBreak2('leetcode', ['leet', 'code'])).toBeTruthy();
  });

  test('Input: s = "applepenapple", wordDict = ["apple","pen"]; Output: true', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBeTruthy();
    expect(wordBreak2('applepenapple', ['apple', 'pen'])).toBeTruthy();
  });

  test('Input: s = "bb", wordDict = ["a","b","bbb","bbbb"]; Output: true', () => {
    expect(wordBreak('bb', ['a', 'b', 'bbb', 'bbbb'])).toBeTruthy();
    expect(wordBreak2('bb', ['a', 'b', 'bbb', 'bbbb'])).toBeTruthy();
  });

  test('Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]; Output: false', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBeFalsy();
    expect(wordBreak2('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBeFalsy();
  });

  test('Input: s = "aaaaaaa", wordDict = ["aaaa","aaa"]; Output: true', () => {
    expect(wordBreak('aaaaaaa', ['aaaa', 'aaa'])).toBeTruthy();
    expect(wordBreak2('aaaaaaa', ['aaaa', 'aaa'])).toBeTruthy();
  });
});
