import { reverseList } from './../../easy/206-reverse-linked-list/206-reverse-linked-list';
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

import { LinkedListNode } from '../../common/linked-list/linked-list-node';
import { middleNode } from '../../easy/876-middle-of-the-linked-list/876-middle-of-the-linked-list';

export const pairSum = (head: LinkedListNode<number> | null): number => {
  const middle = middleNode(head);
  let reversed = reverseList(middle) as LinkedListNode<number> | null;

  let maxVal = 0;

  while (reversed && head?.value) {
    maxVal = Math.max(maxVal, reversed.value + head.value);
    head = head.next;
    reversed = reversed.next;
  }

  return maxVal;
};
