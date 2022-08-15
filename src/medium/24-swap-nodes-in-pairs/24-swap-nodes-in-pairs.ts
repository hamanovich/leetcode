// https://leetcode.com/problems/swap-nodes-in-pairs/

import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const swapPairs = (head: LinkedListNode<number> | null): LinkedListNode<number> | null => {
  const tempNode = new LinkedListNode<number>(0);

  tempNode.next = head as LinkedListNode<number>;
  let prev = tempNode;
  let current = head;

  while (current?.next) {
    const next = current.next;
    prev.next = current.next;
    current.next = next.next;
    next.next = current;
    prev = current;
    current = current?.next;
  }

  return tempNode.next;
};
