import { BinaryTreeNode } from './binary-tree-node';
import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
  it('creates BinarySearchTree', () => {
    const tree = new BinarySearchTree();

    expect(tree.root).toBeNull();
  });

  it('insert()', () => {
    const node17 = new BinaryTreeNode(17);
    const tree = new BinarySearchTree();
    tree.insert(15);
    tree.insert(25);
    tree.insert(10);
    tree.insert(7);
    tree.insert(22);
    tree.insert(17);
    tree.insert(13);
    tree.insert(5);
    tree.insert(9);
    tree.insert(27);

    expect(tree.search(tree.root, 17)).toStrictEqual(node17);
  });

  it('remove()', () => {
    const tree = new BinarySearchTree();
    const node = new BinaryTreeNode(9);
    tree.remove(1);

    expect(tree.root).toBeNull();

    tree.insert(15);
    tree.insert(25);
    tree.insert(10);
    tree.insert(7);
    tree.insert(22);
    tree.insert(17);
    tree.insert(13);
    tree.insert(5);
    tree.insert(9);
    tree.insert(27);

    tree.remove(5);
    tree.remove(7);
    tree.remove(15);

    expect(tree.findMinNode(tree.getRootNode() as BinaryTreeNode)).toStrictEqual(node);

    tree.remove(27);
    tree.remove(25);

    expect(tree.findMinNode(tree.getRootNode() as BinaryTreeNode)).toStrictEqual(node);
  });

  it('findMinNode()', () => {
    const node = new BinaryTreeNode(42);
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const tree = new BinarySearchTree();
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);

    expect(tree.findMinNode(node)).toStrictEqual(node);
    expect(tree.findMinNode(node1)).toStrictEqual(node1);
    expect(tree.findMinNode(node2)).toStrictEqual(node2);
    expect(tree.findMinNode(node3)).toStrictEqual(node3);
    expect(tree.findMinNode(tree.getRootNode() as BinaryTreeNode)).toStrictEqual(node1);
  });

  it('getRootNode()', () => {
    const tree = new BinarySearchTree();

    expect(tree.getRootNode()).toStrictEqual(tree.root);
  });

  it('search()', () => {
    const node = new BinaryTreeNode(1);
    const node7 = new BinaryTreeNode(7);
    const tree = new BinarySearchTree();
    tree.insert(15);
    tree.insert(25);
    tree.insert(7);

    expect(tree.search(node, 42)).toBeNull();
    expect(tree.search(tree.root, 7)).toStrictEqual(node7);
  });

  it('BFS()', () => {
    const arr = [47, 21, 76, 18, 27, 52, 82];
    const tree = new BinarySearchTree();
    arr.forEach(item => tree.insert(item));

    expect(tree.BFS()).toStrictEqual(arr);
  });

  it('DFSPreOrder()', () => {
    const arr = [47, 21, 76, 18, 27, 52, 82];
    const result = [47, 21, 18, 27, 76, 52, 82];
    const tree = new BinarySearchTree();

    expect(tree.DFSPreOrder()).toStrictEqual([]);

    arr.forEach(item => tree.insert(item));

    expect(tree.DFSPreOrder()).toStrictEqual(result);
  });

  it('DFSPostOrder()', () => {
    const arr = [47, 21, 76, 18, 27, 52, 82];
    const result = [18, 27, 21, 52, 82, 76, 47];
    const tree = new BinarySearchTree();

    expect(tree.DFSPostOrder()).toStrictEqual([]);

    arr.forEach(item => tree.insert(item));

    expect(tree.DFSPostOrder()).toStrictEqual(result);
  });

  it('DFSInOrder()', () => {
    const arr = [47, 21, 76, 18, 27, 52, 82];
    const result = [18, 21, 27, 47, 52, 76, 82];
    const tree = new BinarySearchTree();

    expect(tree.DFSInOrder()).toStrictEqual([]);

    arr.forEach(item => tree.insert(item));

    expect(tree.DFSInOrder()).toStrictEqual(result);
  });
});
