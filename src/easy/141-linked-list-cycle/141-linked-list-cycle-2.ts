import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const hasCycle = (head: LinkedListNode): boolean => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next as LinkedListNode;
    fast = fast.next.next as LinkedListNode;

    if (slow === fast) return true;
  }
  return false;
};
