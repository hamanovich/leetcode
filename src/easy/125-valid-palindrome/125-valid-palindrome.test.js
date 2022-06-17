import { isPalindrome } from './125-valid-palindrome';

test('isPalindrome "A man, a plan, a canal: Panama" equal true', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
});

test('isPalindrome "race a car" equal false', () => {
  expect(isPalindrome('race a car')).toBeFalsy();
});

test('isPalindrome " " equal true', () => {
  expect(isPalindrome(' ')).toBeTruthy();
});
