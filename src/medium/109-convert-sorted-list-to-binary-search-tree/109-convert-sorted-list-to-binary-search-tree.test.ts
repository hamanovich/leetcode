import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';
import { LinkedList } from '../../common/linked-list/linked-list';
import { sortedListToBST } from './109-convert-sorted-list-to-binary-search-tree';
import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

describe('sortedListToBST', () => {
  test('Input: head = [-10,-3,0,5,9]; Output: [0,-3,9,-10,null,5]', () => {
    const list = new LinkedList();
    const tree = new BinaryTreeNode(0);

    tree.left = new BinaryTreeNode(-10);
    tree.right = new BinaryTreeNode(5);
    tree.left.right = new BinaryTreeNode(-3);
    tree.right.right = new BinaryTreeNode(9);

    list.append(-10);
    list.append(-3);
    list.append(0);
    list.append(5);
    list.append(9);

    expect(sortedListToBST(list.head as LinkedListNode<number>)).toEqual(tree);
  });

  test('Input: head = []; Output: []', () => {
    const list = new LinkedList();
    expect(sortedListToBST(list.head as LinkedListNode<number>)).toBeNull();
  });
});
