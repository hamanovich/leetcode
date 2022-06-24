/**
 * @param {LinkedListNode} head
 * @return {LinkedListNode}
 */
export const deleteDuplicates = head => {
  let current = head;

  while (current?.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
