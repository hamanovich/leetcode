import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { sortedArrayToBST } from './108-convert-sorted-array-to-binary-search-tree';

describe('sortedArrayToBST', () => {
  test('Input: nums = [-10,-3,0,5,9]; Output: [0,-10,5,null,-3,null,9]', () => {
    const tree = new BinaryTreeNode(0);
    tree.left = new BinaryTreeNode(-10);
    tree.right = new BinaryTreeNode(5);
    tree.left.right = new BinaryTreeNode(-3);
    tree.right.right = new BinaryTreeNode(9);

    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toStrictEqual(tree);
  });

  test('Input: nums = [1,3];Output: [3,1]', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(3);

    expect(sortedArrayToBST([1, 3])).toStrictEqual(tree);
  });
});
