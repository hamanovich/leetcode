import { reverseOnlyLetters } from './917-reverse-only-letters';

describe('reverseOnlyLetters', () => {
  test('Input: s = "ab-cd"; Output: "dc-ba"', () => {
    expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba');
  });

  test('Input: s = "a-!!!bC-dEf-ghIj"; Output: "j-!!!Ih-gfE-dCba"', () => {
    expect(reverseOnlyLetters('a-!!!bC-dEf-ghIj')).toBe('j-!!!Ih-gfE-dCba');
  });

  test('Input: s = "Test1ng-Leet=code-Q!"; Output: "Qedo1ct-eeLg=ntse-T!"', () => {
    expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!');
  });
});
