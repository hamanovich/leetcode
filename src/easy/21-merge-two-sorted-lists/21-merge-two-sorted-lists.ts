import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const mergeTwoLists = (
  list1: LinkedListNode<number> | null,
  list2: LinkedListNode<number> | null
): LinkedListNode | null => {
  const tempNode = new LinkedListNode(0);
  let currentNode = tempNode;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      currentNode.next = list1;
      list1 = list1.next as LinkedListNode<number>;
    } else {
      currentNode.next = list2;
      list2 = list2.next as LinkedListNode<number>;
    }
    currentNode = currentNode.next as LinkedListNode<number>;
  }

  currentNode.next = list1 || list2;

  return tempNode.next;
};
