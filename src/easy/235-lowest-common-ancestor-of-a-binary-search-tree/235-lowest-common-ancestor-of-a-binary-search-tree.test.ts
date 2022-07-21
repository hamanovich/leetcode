import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { lowestCommonAncestor } from './235-lowest-common-ancestor-of-a-binary-search-tree';
import { lowestCommonAncestor as lowestCommonAncestorRecursive } from './235-lowest-common-ancestor-of-a-binary-search-tree-2';

describe('lowestCommonAncestor', () => {
  test('root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', () => {
    const tree = new BinaryTreeNode(6);
    tree.left = new BinaryTreeNode(2);
    tree.left.left = new BinaryTreeNode(0);
    tree.left.right = new BinaryTreeNode(4);
    tree.left.right.left = new BinaryTreeNode(3);
    tree.left.right.right = new BinaryTreeNode(5);
    tree.right = new BinaryTreeNode(8);
    tree.right.left = new BinaryTreeNode(7);
    tree.right.right = new BinaryTreeNode(9);

    expect(lowestCommonAncestor(tree, new BinaryTreeNode(2), new BinaryTreeNode(8))).toStrictEqual(tree);
    expect(lowestCommonAncestorRecursive(tree, new BinaryTreeNode(2), new BinaryTreeNode(8))).toStrictEqual(tree);
  });

  test('root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', () => {
    const tree = new BinaryTreeNode(6);
    tree.left = new BinaryTreeNode(2);
    tree.left.left = new BinaryTreeNode(0);
    tree.left.right = new BinaryTreeNode(4);
    tree.left.right.left = new BinaryTreeNode(3);
    tree.left.right.right = new BinaryTreeNode(5);
    tree.right = new BinaryTreeNode(8);
    tree.right.left = new BinaryTreeNode(7);
    tree.right.right = new BinaryTreeNode(9);

    const treeResult = new BinaryTreeNode(2);
    treeResult.left = new BinaryTreeNode(0);
    treeResult.right = new BinaryTreeNode(4);
    treeResult.right.left = new BinaryTreeNode(3);
    treeResult.right.right = new BinaryTreeNode(5);

    expect(lowestCommonAncestor(tree, new BinaryTreeNode(2), new BinaryTreeNode(4))).toStrictEqual(treeResult);
    expect(lowestCommonAncestorRecursive(tree, new BinaryTreeNode(2), new BinaryTreeNode(4))).toStrictEqual(treeResult);
  });

  test('root = [2,1], p = 2, q = 1', () => {
    const tree = new BinaryTreeNode(2);
    tree.left = new BinaryTreeNode(1);

    expect(lowestCommonAncestor(tree, new BinaryTreeNode(2), new BinaryTreeNode(1))).toStrictEqual(tree);
    expect(lowestCommonAncestorRecursive(tree, new BinaryTreeNode(2), new BinaryTreeNode(1))).toStrictEqual(tree);
  });

  test('root = [2,2,1], p = 2, q = 1', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(1);
    tree.left.right = new BinaryTreeNode(10);
    tree.left.left = new BinaryTreeNode(3);

    expect(lowestCommonAncestor(tree, new BinaryTreeNode(2), new BinaryTreeNode(3))).toBeNull();
    expect(lowestCommonAncestorRecursive(tree, new BinaryTreeNode(2), new BinaryTreeNode(3))).toBeNull();
  });
});
