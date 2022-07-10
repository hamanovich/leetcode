import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const getIntersectionNode = (headA: LinkedListNode | null, headB: LinkedListNode | null): unknown => {
  if (!headA || !headB) return null;

  let a: LinkedListNode | null = headA;
  let b: LinkedListNode | null = headB;

  while (a?.value !== b?.value) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }

  return a?.value || null;
};

// listA = [1,9,1,2,4], listB = [3,2,4]
// listA: 1-9-1-2-4-3-2->
// listB: 3-2-4-1-9-1-2->

// listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
// listA: 4-1-8-4-5-5-6-1-8->
// listB: 5-6-1-8-4-5-4-1-8->
