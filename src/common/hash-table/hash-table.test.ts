import { HashTable } from './hash-table';

describe('HashTable', () => {
  const ht = new HashTable();

  beforeEach(() => ht.clear());

  test('set', () => {
    ht.set('objectKey', { prop1: 'a', prop2: 'b' });

    const object = ht.get('objectKey') as {
      prop1: string;
      prop2: string;
    };

    expect(object).toBeDefined();
    expect(object.prop1).toBe('a');
    expect(object.prop2).toBe('b');
  });

  it('get', () => {
    ht.set('a', 'prop-a');
    ht.set('a', 'prop-aa');
    ht.set('Spain', 110);
    ht.set('ǻ', 192);
    expect(ht.get('a')).toBe('prop-aa');
    expect(ht.size).toBe(3);
  });

  it('remove', () => {
    ht.set('a', 'prop-a');
    ht.set('b', 'prop-b');
    ht.set('c', 'prop-c');
    ht.set('Spain', 110);
    ht.set('ǻ', 192);
    expect(ht.get('a')).toBe('prop-a');

    ht.remove('a');
    expect(ht.get('a')).toBeUndefined();

    ht.remove('x');
    ht.remove('ǻ');
    expect(ht.get('x')).toBeUndefined();
  });
});
