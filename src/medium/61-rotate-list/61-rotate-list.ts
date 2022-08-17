// https://leetcode.com/problems/rotate-list/

import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const rotateRight = (head: LinkedListNode | null, k: number): LinkedListNode | null => {
  if (!head || !head.next || !k) return head;

  let cur = head;
  let size = 1;

  while (cur.next) {
    cur = cur.next;
    ++size;
  }

  cur.next = head;

  let tail = head;

  for (let i = 1; i < size - (k % size); i++) tail = tail.next as LinkedListNode;

  const result = tail.next;

  tail.next = null;

  return result;
};
