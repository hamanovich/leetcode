import { isPalindrome } from './125-valid-palindrome';

describe('isPalindrome', () => {
  test('"A man, a plan, a canal: Panama" equal true', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  test('"race a car" equal false', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
  });

  test('" " equal true', () => {
    expect(isPalindrome(' ')).toBeTruthy();
  });
});
