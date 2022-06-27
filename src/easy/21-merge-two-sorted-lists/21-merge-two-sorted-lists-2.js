/**
 * @param {LinkedListNode} list1
 * @param {LinkedListNode} list2
 * @return {LinkedListNode}
 */
export const mergeTwoLists = (list1, list2) => {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);

  return list2;
};
