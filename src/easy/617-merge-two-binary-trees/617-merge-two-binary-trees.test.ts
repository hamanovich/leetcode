import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { mergeTrees } from './617-merge-two-binary-trees';

describe('mergeTrees', () => {
  test('Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]; Output: [3,4,5,5,4,null,7]', () => {
    const tree1 = new BinaryTreeNode(1);
    tree1.left = new BinaryTreeNode(3);
    tree1.right = new BinaryTreeNode(2);
    tree1.left.left = new BinaryTreeNode(5);

    const tree2 = new BinaryTreeNode(2);
    tree2.left = new BinaryTreeNode(1);
    tree2.right = new BinaryTreeNode(3);
    tree2.left.right = new BinaryTreeNode(4);
    tree2.right.right = new BinaryTreeNode(7);

    const treeResult = new BinaryTreeNode(3);
    treeResult.left = new BinaryTreeNode(4);
    treeResult.right = new BinaryTreeNode(5);
    treeResult.left.left = new BinaryTreeNode(5);
    treeResult.left.right = new BinaryTreeNode(4);
    treeResult.right.right = new BinaryTreeNode(7);

    expect(mergeTrees(tree1, tree2)).toStrictEqual(treeResult);
  });

  test('Input: root1 = [1], root2 = [1,2]; Output: [2,2]', () => {
    const tree1 = new BinaryTreeNode(1);

    const tree2 = new BinaryTreeNode(1);
    tree2.left = new BinaryTreeNode(2);

    const treeResult = new BinaryTreeNode(2);
    treeResult.left = new BinaryTreeNode(2);

    expect(mergeTrees(tree1, tree2)).toStrictEqual(treeResult);
  });

  test('Input: root1 = [], root2 = []; Output: null', () => {
    expect(mergeTrees()).toBeNull();
  });

  test('Input: root1 = [], root2 = [1]; Output: [1]', () => {
    const tree2 = new BinaryTreeNode(1);

    expect(mergeTrees(undefined, tree2)).toStrictEqual(tree2);
  });

  test('Input: root1 = [1], root2 = [0]; Output: [1]', () => {
    const tree1 = new BinaryTreeNode(1);

    expect(mergeTrees(tree1)).toStrictEqual(tree1);
  });
});
