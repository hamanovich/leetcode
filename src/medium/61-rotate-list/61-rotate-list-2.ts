// https://leetcode.com/problems/rotate-list/

import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const rotateRight = (head: LinkedListNode<number> | null, k: number): LinkedListNode<number> | null => {
  const dummy = new LinkedListNode<number>(0);
  let slow = dummy;
  let fast = dummy;
  let size = 0;
  dummy.next = head as LinkedListNode<number>;

  while (fast.next) {
    fast = fast.next;
    size++;
  }

  for (let i = 1; i <= size - (k % size); i++) slow = slow.next as LinkedListNode<number>;

  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;

  return dummy.next;
};
