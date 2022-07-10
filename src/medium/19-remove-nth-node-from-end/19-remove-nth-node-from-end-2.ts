import { LinkedListNode } from './../../common/linked-list/linked-list-node';

export const removeNthFromEnd = (head: LinkedListNode, n: number): LinkedListNode | null => {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) fast = fast.next as LinkedListNode;

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next as LinkedListNode;
  }

  slow.next = slow.next?.next as LinkedListNode;

  return head;
};
