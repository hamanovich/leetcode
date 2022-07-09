import { numUniqueEmails } from './929-unique-email-addresses';

describe('numUniqueEmails', () => {
  test('Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]; Output: 2', () => {
    expect(
      numUniqueEmails([
        'test.email+alex@leetcode.com',
        'test.e.mail+bob.cathy@leetcode.com',
        'testemail+david@lee.tcode.com',
      ])
    ).toBe(2);
  });

  test('Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]; Output: 3', () => {
    expect(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])).toBe(3);
  });
});
