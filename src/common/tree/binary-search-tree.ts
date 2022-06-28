import { BinaryTreeNode } from './binary-tree-node';

export class BinarySearchTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number) {
    const node = new BinaryTreeNode(val);

    if (!this.root) this.root = node;
    else this.insertNode(this.root, node);
  }

  insertNode(node: BinaryTreeNode | null, newNode: BinaryTreeNode | null) {
    if (!newNode && !node) return;
    if (!!newNode?.val < !!node?.val) {
      if (!node?.left) node && (node.left = newNode);
      else this.insertNode(node.left, newNode);
    } else {
      if (!node?.right) node && (node.right = newNode);
      else this.insertNode(node.right, newNode);
    }
  }

  remove(data: number) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node: BinaryTreeNode | null, key: number) {
    if (!node) return null;

    if (key < node.val) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.val) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (!node.left && !node.right) {
      node = null;
      return node;
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    node.val = this.findMinNode(node.right).val;
    node.right = this.removeNode(node.right, this.findMinNode(node.right).val);

    return node;
  }

  findMinNode(node: BinaryTreeNode): BinaryTreeNode {
    if (!node.left) return node;
    return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  search(node: BinaryTreeNode | null, data: number): BinaryTreeNode | null {
    if (!node) return null;
    if (data < node.val) return this.search(node.left, data);
    if (data > node.val) return this.search(node.right, data);
    return node;
  }
}

// const tree = new BinarySearchTree();

// tree.insert(15);
// tree.insert(25);
// tree.insert(10);
// tree.insert(7);
// tree.insert(22);
// tree.insert(17);
// tree.insert(13);
// tree.insert(5);
// tree.insert(9);
// tree.insert(27);

// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      7  13 22  27
// //     / \    /
// //    5   9  17

// tree.remove(5);

// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      7  13 22  27
// //       \    /
// //        9  17

// tree.remove(7);

// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      9  13 22  27
// //            /
// //           17

// tree.remove(15);

// //          17
// //         /  \
// //        10   25
// //       / \   / \
// //      9  13 22  27
