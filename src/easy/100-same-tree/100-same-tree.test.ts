import { BinaryTreeNode } from './../../common/tree/binary-tree-node';
import { isSameTree } from './100-same-tree';

describe('isSameTree', () => {
  test('Input: p = [1,2,3], q = [1,2,3]; Output: true', () => {
    const tree1 = new BinaryTreeNode(1);
    tree1.left = new BinaryTreeNode(2);
    tree1.right = new BinaryTreeNode(3);

    const tree2 = new BinaryTreeNode(1);
    tree2.left = new BinaryTreeNode(2);
    tree2.right = new BinaryTreeNode(3);
    expect(isSameTree(tree1, tree2)).toBeTruthy();
  });

  test('Input: p = [1,2], q = [1,null,2]; Output: false', () => {
    const tree1 = new BinaryTreeNode(1);
    tree1.left = new BinaryTreeNode(2);

    const tree2 = new BinaryTreeNode(1);
    tree2.right = new BinaryTreeNode(3);
    expect(isSameTree(tree1, tree2)).toBeFalsy();
  });

  test('Input: p = [1,2,1], q = [1,1,2]; Output: false', () => {
    const tree1 = new BinaryTreeNode(1);
    tree1.left = new BinaryTreeNode(2);
    tree1.right = new BinaryTreeNode(1);

    const tree2 = new BinaryTreeNode(1);
    tree2.left = new BinaryTreeNode(1);
    tree2.right = new BinaryTreeNode(2);
    expect(isSameTree(tree1, tree2)).toBeFalsy();
  });

  test('Input: p = [], q = []; Output: true', () => {
    const tree1 = new BinaryTreeNode(1);
    tree1.left = new BinaryTreeNode(2);
    tree1.right = new BinaryTreeNode(1);

    const tree2 = new BinaryTreeNode(1);
    tree2.left = new BinaryTreeNode(1);
    tree2.right = new BinaryTreeNode(2);
    expect(isSameTree()).toBeTruthy();
  });

  test('Input: p = [1], q = []; Output: false', () => {
    const tree1 = new BinaryTreeNode(1);
    expect(isSameTree(tree1)).toBeFalsy();
  });

  test('Input: p = [], q = [1]; Output: false', () => {
    const tree2 = new BinaryTreeNode(1);

    expect(isSameTree(null, tree2)).toBeFalsy();
  });
});
