import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  it('creates empty linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.toString()).toBe('');
  });

  it('appends node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.tail?.next).toBeNull();
  });

  it('prepends node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('2');

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('deletes node by value from linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');

    const deletedNode = linkedList.delete(3);
    expect(deletedNode?.value).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('2');

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('deletes linked list tail', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('3');

    const deletedNode1 = linkedList.deleteTail();

    expect(deletedNode1?.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteTail();

    expect(deletedNode2?.value).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('1');

    const deletedNode3 = linkedList.deleteTail();

    expect(deletedNode3?.value).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    expect(linkedList.deleteTail()).toBeNull();
  });

  it('deletes linked list head', () => {
    const linkedList = new LinkedList();

    expect(linkedList.deleteHead()).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('2');

    const deletedNode1 = linkedList.deleteHead();

    expect(deletedNode1?.value).toBe(1);
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteHead();

    expect(deletedNode2?.value).toBe(2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('is possible to store objects in the list and to print them out', () => {
    const linkedList = new LinkedList<{ value: number; key: string }>();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };

    linkedList.append(nodeValue1).prepend(nodeValue2);

    const stringifier = (value: { value: number; key: string }) => `${value.key}:${value.value}`;

    expect(linkedList.toString(stringifier)).toBe('key2:2,key1:1');
  });

  it('find node by value', () => {
    const linkedList = new LinkedList();

    expect(linkedList.find({ value: 5 })).toBeNull();

    linkedList.append(1);
    expect(linkedList.find({ value: 1 })).toBeDefined();
    expect(linkedList.find({ value: 123 })).toStrictEqual(linkedList.head?.next);
  });

  it('create linked list from array', () => {
    const linkedList = new LinkedList();

    expect(linkedList.toString()).toBe('');

    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  it('convert to array', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.toArray().join(',')).toBe('1,2,3');
  });
});
