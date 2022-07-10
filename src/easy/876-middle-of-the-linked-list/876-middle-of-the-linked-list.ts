import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const middleNode = (head: LinkedListNode | null): LinkedListNode | null => {
  let slow = head;
  let fast = head;

  while (fast?.next && slow?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
