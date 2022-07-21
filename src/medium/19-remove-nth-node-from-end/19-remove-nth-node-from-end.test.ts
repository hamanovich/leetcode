import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';
import { LinkedList } from '../../common/linked-list/linked-list';
import { removeNthFromEnd } from './19-remove-nth-node-from-end';
import { removeNthFromEnd as removeNthFromEnd2 } from './19-remove-nth-node-from-end-2';

describe('removeNthFromEnd', () => {
  const list = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    listResult.clear();
  });

  test('#1: head = [1,2,3,4,5], n = 2', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    listResult.append(1);
    listResult.append(2);
    listResult.append(3);
    listResult.append(5);
    expect(removeNthFromEnd(list.head as LinkedListNode, 2)).toStrictEqual(listResult.head);
  });

  test('#2: head = [1,2,3,4,5], n = 2', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    listResult.append(1);
    listResult.append(2);
    listResult.append(3);
    listResult.append(5);
    expect(removeNthFromEnd2(list.head as LinkedListNode, 2)).toStrictEqual(listResult.head);
  });

  test('#1: head = [1], n = 1', () => {
    list.append(1);
    expect(removeNthFromEnd(list.head as LinkedListNode, 1)).toBeNull();
  });

  test('#2: head = [1], n = 1', () => {
    list.append(1);
    expect(removeNthFromEnd2(list.head as LinkedListNode, 1)).toBeNull();
  });

  test('#1: head = [1,2], n = 1', () => {
    list.append(1);
    list.append(2);
    listResult.append(1);
    expect(removeNthFromEnd(list.head as LinkedListNode, 1)).toStrictEqual(listResult.head);
  });

  test('#2: head = [1,2], n = 1', () => {
    list.append(1);
    list.append(2);
    listResult.append(1);
    expect(removeNthFromEnd2(list.head as LinkedListNode, 1)).toStrictEqual(listResult.head);
  });
});
