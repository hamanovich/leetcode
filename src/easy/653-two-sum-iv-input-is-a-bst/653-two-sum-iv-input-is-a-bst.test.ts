import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { findTarget } from './653-two-sum-iv-input-is-a-bst';

describe('findTarget', () => {
  test('Input: root = [5,3,6,2,4,null,7], k = 9; Output: true', () => {
    const tree = new BinaryTreeNode(5);
    tree.left = new BinaryTreeNode(3);
    tree.right = new BinaryTreeNode(6);
    tree.left.left = new BinaryTreeNode(2);
    tree.left.right = new BinaryTreeNode(4);
    tree.right.right = new BinaryTreeNode(7);

    expect(findTarget(tree, 9)).toBeTruthy();
  });

  test('Input: root = [5,3,6,2,4,null,7], k = 28; Output: false', () => {
    const tree = new BinaryTreeNode(5);
    tree.left = new BinaryTreeNode(3);
    tree.right = new BinaryTreeNode(6);
    tree.left.left = new BinaryTreeNode(2);
    tree.left.right = new BinaryTreeNode(4);
    tree.right.right = new BinaryTreeNode(7);

    expect(findTarget(tree, 28)).toBeFalsy();
  });
});
