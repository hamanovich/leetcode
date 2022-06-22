import { isIsomorphic } from './205-isomorphic-strings';
import { isIsomorphic as isIsomorphic2 } from './205-isomorphic-strings-2';

describe('isIsomorphic', () => {
  test('s = "egg", t = "add"', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy();
    expect(isIsomorphic2('egg', 'add')).toBeTruthy();
  });

  test('s = "foo", t = "bar"', () => {
    expect(isIsomorphic('foo', 'bar')).toBeFalsy();
    expect(isIsomorphic2('foo', 'bar')).toBeFalsy();
  });

  test('s = "paper", t = "title"', () => {
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
    expect(isIsomorphic2('paper', 'title')).toBeTruthy();
  });
});
