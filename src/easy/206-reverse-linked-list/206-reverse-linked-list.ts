import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const reverseList = (head: LinkedListNode | null): LinkedListNode | null => {
  let prev = null;
  let on = head;

  while (on) {
    const next = on.next;
    [on.next, prev] = [prev, on];
    on = next as LinkedListNode;
  }

  return prev;
};
