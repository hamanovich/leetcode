import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const mergeTwoLists = (
  list1: LinkedListNode<number> | null,
  list2: LinkedListNode<number> | null
): LinkedListNode<number> | null => {
  if (!list1 || !list2) return list1 || list2;

  if (list1.value < list2.value) {
    list1.next = mergeTwoLists(list1.next as LinkedListNode<number>, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next as LinkedListNode<number>);

  return list2;
};
