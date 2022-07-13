import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { invertTree } from './226-invert-binary-tree';

describe('invertTree', () => {
  test('Input: root = [4,2,7,1,3,6,9]; Output: [4,7,2,9,6,3,1]', () => {
    const tree = new BinaryTreeNode(4);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(7);
    tree.left.left = new BinaryTreeNode(1);
    tree.left.right = new BinaryTreeNode(3);
    tree.right.left = new BinaryTreeNode(6);
    tree.right.right = new BinaryTreeNode(9);

    const treeResult = new BinaryTreeNode(4);
    treeResult.left = new BinaryTreeNode(7);
    treeResult.right = new BinaryTreeNode(2);
    treeResult.left.left = new BinaryTreeNode(9);
    treeResult.left.right = new BinaryTreeNode(6);
    treeResult.right.left = new BinaryTreeNode(3);
    treeResult.right.right = new BinaryTreeNode(1);

    expect(invertTree(tree)).toStrictEqual(treeResult);
  });

  test('Input: root = [2,1,3]; Output: [2,3,1]', () => {
    const tree = new BinaryTreeNode(2);
    tree.left = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(3);

    const treeResult = new BinaryTreeNode(2);
    treeResult.left = new BinaryTreeNode(3);
    treeResult.right = new BinaryTreeNode(1);
    expect(invertTree(tree)).toStrictEqual(treeResult);
  });

  test('Input: root = []; Output: []', () => {
    expect(invertTree(null)).toBeNull();
  });
});
