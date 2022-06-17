import { isValid } from './20-valid-parentheses';

test('isValid () equal true', () => {
  expect(isValid('()')).toBeTruthy();
});

test('isValid ()[]{} equal true', () => {
  expect(isValid('()[]{}')).toBeTruthy();
});

test('isValid (] equal false', () => {
  expect(isValid('(]')).toBeFalsy();
});
