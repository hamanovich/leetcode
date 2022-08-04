import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { isSubtree } from './572-subtree-of-another-tree';

describe('isSubtree', () => {
  test('Input: root = [3,4,5,1,2], subRoot = [4,1,2]; Output: true', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(4);
    tree.right = new BinaryTreeNode(5);
    tree.left.left = new BinaryTreeNode(1);
    tree.left.right = new BinaryTreeNode(2);

    const subRoot = new BinaryTreeNode(4);
    subRoot.left = new BinaryTreeNode(1);
    subRoot.right = new BinaryTreeNode(2);

    expect(isSubtree(tree, subRoot)).toBeTruthy();
  });

  test('Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]; Output: false', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(4);
    tree.left = new BinaryTreeNode(5);
    tree.left.left = new BinaryTreeNode(1);
    tree.left.right = new BinaryTreeNode(2);
    tree.left.right.left = new BinaryTreeNode(0);

    const subRoot = new BinaryTreeNode(4);
    subRoot.left = new BinaryTreeNode(1);
    subRoot.right = new BinaryTreeNode(2);

    expect(isSubtree(tree, subRoot)).toBeFalsy();
  });
});
