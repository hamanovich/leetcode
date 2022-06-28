import { Array as MyArray } from './array';

describe('array', () => {
  const array = new MyArray();

  beforeEach(() => array.clear());

  test('push', () => {
    array.push(1);
    array.push(2);
    expect(array.length).toBe(2);
  });

  test('pop', () => {
    array.push(1);
    array.push(2);
    const popped = array.pop();
    expect(array.length).toBe(1);
    expect(popped).toBe(2);
  });

  test('get', () => {
    array.push(1);
    array.push(2);
    expect(array.get(1)).toBe(2);
  });

  test('delete', () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.delete(2);
    array.delete();
    expect(array.length).toBe(1);
    expect(array.get(0)).toBe(1);
  });

  test('insert', () => {
    array.push(1);
    array.push(2);
    array.push(3);
    expect(array.length).toBe(3);
    expect(array.get(2)).toBe(3);
    array.insert(42, 2);
    expect(array.length).toBe(4);
    expect(array.get(2)).toBe(42);
  });
});
