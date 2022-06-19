import { isValid } from './20-valid-parentheses';

describe('isValid', () => {
  test('() equal true', () => {
    expect(isValid('()')).toBeTruthy();
  });

  test('()[]{} equal true', () => {
    expect(isValid('()[]{}')).toBeTruthy();
  });

  test('(] equal false', () => {
    expect(isValid('(]')).toBeFalsy();
  });
});
