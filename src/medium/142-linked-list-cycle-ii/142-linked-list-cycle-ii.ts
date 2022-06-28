import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const detectCycle = (head: LinkedListNode) => {
  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    slow = slow.next as LinkedListNode;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next as LinkedListNode;
        fast = fast.next as LinkedListNode;
      }

      return slow;
    }
  }

  return null;
};
