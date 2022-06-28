import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const reverseList = (head: LinkedListNode | null, prev: LinkedListNode | null = null): LinkedListNode | null => {
  if (head === null) return prev;

  const temp = head.next;
  head.next = prev;

  return reverseList(temp, head);
};
