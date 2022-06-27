import { HashTable } from './hash-table';

describe('HashTable', () => {
  const ht = new HashTable();

  beforeEach(() => ht.clear());

  test('set', () => {
    ht.set('objectKey', { prop1: 'a', prop2: 'b' });

    const object = ht.get('objectKey');
    expect(object).toBeDefined();
    expect(object.prop1).toBe('a');
    expect(object.prop2).toBe('b');
  });

  it('get and remove', () => {
    ht.set('a', 'prop-a');
    ht.set('b', 'prop-b');
    ht.set('c', 'prop-c');

    expect(ht.get('a')).toBe('prop-a');

    ht.remove('a');

    expect(ht.get('a')).toBeUndefined();
  });
});
