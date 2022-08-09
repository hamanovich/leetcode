import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { isBalanced } from './110-balanced-binary-tree';
import { isBalanced as isBalanced2 } from './110-balanced-binary-tree-2';

describe('isBalanced', () => {
  test('Input: root = [3,9,20,null,null,15,7]; Output: true', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.right.left = new BinaryTreeNode(15);
    tree.right.right = new BinaryTreeNode(7);

    expect(isBalanced(tree)).toBeTruthy();
    expect(isBalanced2(tree)).toBeTruthy();
  });

  test('Input: root = [1,2,2,3,3,null,null,4,4]; Output: false', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(2);
    tree.left.left = new BinaryTreeNode(3);
    tree.left.right = new BinaryTreeNode(3);
    tree.left.left.left = new BinaryTreeNode(4);
    tree.left.left.right = new BinaryTreeNode(4);

    expect(isBalanced(tree)).toBeFalsy();
    expect(isBalanced2(tree)).toBeFalsy();
  });

  test('Input: root = []; Output: true', () => {
    expect(isBalanced(null)).toBeTruthy();
    expect(isBalanced2(null)).toBeTruthy();
  });
});
