import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { hasPathSum } from './112-path-sum';

describe('hasPathSum', () => {
  test('Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22; Output: true', () => {
    const tree = new BinaryTreeNode(5);
    tree.left = new BinaryTreeNode(4);
    tree.right = new BinaryTreeNode(8);
    tree.left.left = new BinaryTreeNode(11);
    tree.right.left = new BinaryTreeNode(13);
    tree.right.right = new BinaryTreeNode(4);
    tree.right.right = new BinaryTreeNode(4);
    tree.left.left.left = new BinaryTreeNode(7);
    tree.left.left.right = new BinaryTreeNode(2);
    tree.right.right.right = new BinaryTreeNode(1);

    expect(hasPathSum(tree, 22)).toBeTruthy();
  });

  test('Input: root = [1,2,3], targetSum = 5; Output: false', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);

    expect(hasPathSum(tree, 5)).toBeFalsy();
  });

  test('Input: root = [], targetSum = 0; Output: false', () => {
    expect(hasPathSum(null, 0)).toBeFalsy();
  });
});
