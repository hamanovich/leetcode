import { LinkedList } from '../../common/linked-list/linked-list';
import { LinkedListNode } from '../../common/linked-list/linked-list-node';
import { middleNode } from './876-middle-of-the-linked-list';
import { middleNode as middleNode2 } from './876-middle-of-the-linked-list-2';

describe('middleNode', () => {
  const list = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    listResult.clear();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    listResult.append(4);
    listResult.append(5);
    listResult.append(6);
  });

  test('#1: head = [1,2,3,4,5,6]', () => {
    expect(middleNode(list.head)).toStrictEqual(listResult.head);
  });

  test('#2: head = [1,2,3,4,5,6]', () => {
    expect(middleNode2(list.head as LinkedListNode)).toStrictEqual(listResult.head);
  });
});
