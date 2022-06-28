import { LinkedListNode } from '../../common/linked-list/linked-list-node';

/**
 * @param {LinkedListNode} list1
 * @param {LinkedListNode} list2
 * @return {LinkedListNode}
 */
export const mergeTwoLists = (list1, list2) => {
  let tempNode = new LinkedListNode();
  let currentNode = tempNode;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = list1 || list2;

  return tempNode.next;
};
