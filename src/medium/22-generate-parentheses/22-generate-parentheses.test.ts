import { generateParenthesis } from './22-generate-parentheses';

describe('generateParenthesis', () => {
  test('Input: n = 3; Output: ["((()))","(()())","(())()","()(())","()()()"]', () => {
    expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
  });

  test('Input: n = 1; Output: ["()"]', () => {
    expect(generateParenthesis(1)).toEqual(['()']);
  });

  test('Input: n = 0; Output: [""]', () => {
    expect(generateParenthesis(0)).toEqual(['']);
  });
});
