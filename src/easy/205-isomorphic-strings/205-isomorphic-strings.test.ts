import { isIsomorphic } from './205-isomorphic-strings';
import { isIsomorphic as isIsomorphic2 } from './205-isomorphic-strings-2';

describe('isIsomorphic', () => {
  test('s = "egg", t = "add"', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy();
    expect(isIsomorphic2('egg', 'add')).toBeTruthy();
  });

  test('s = "a", t = "bc"', () => {
    expect(isIsomorphic('a', 'bc')).toBeFalsy();
    expect(isIsomorphic2('a', 'bc')).toBeFalsy();
  });

  test('s = "foo", t = "bar"', () => {
    expect(isIsomorphic('foo', 'bar')).toBeFalsy();
    expect(isIsomorphic2('foo', 'bar')).toBeFalsy();
  });

  test('s = "paper", t = "title"', () => {
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
    expect(isIsomorphic2('paper', 'title')).toBeTruthy();
  });

  test('s = "qwerty", t = "oooiio"', () => {
    expect(isIsomorphic('qwerty', 'oooiio')).toBeFalsy();
    expect(isIsomorphic2('qwerty', 'oooiio')).toBeFalsy();
  });
});
