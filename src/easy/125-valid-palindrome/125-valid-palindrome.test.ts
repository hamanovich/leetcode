import { isPalindrome } from './125-valid-palindrome';
import { isPalindrome as isPalindrome2 } from './125-valid-palindrome-2';

describe('isPalindrome', () => {
  test('"A man, a plan, a canal: Panama" equal true', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    expect(isPalindrome2('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  test('"race a car" equal false', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
    expect(isPalindrome2('race a car')).toBeFalsy();
  });

  test('" " equal true', () => {
    expect(isPalindrome(' ')).toBeTruthy();
    expect(isPalindrome2(' ')).toBeTruthy();
  });
});
