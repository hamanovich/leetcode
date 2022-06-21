/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = head => {
  let prev = null;
  let on = head;

  while (on) {
    let temp = on.next;
    on.next = prev;
    prev = on;
    on = temp;
  }

  return prev;
};
