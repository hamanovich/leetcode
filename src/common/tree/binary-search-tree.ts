import { BinaryTreeNode } from './binary-tree-node';

export class BinarySearchTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number): void {
    const node = new BinaryTreeNode(val);

    if (!this.root) this.root = node;
    else this.insertNode(this.root, node);
  }

  insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode): void {
    if (Number(newNode.val) < Number(node.val)) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  remove(val: number): void {
    this.root = this.removeNode(this.root, val);
  }

  removeNode(node: BinaryTreeNode | null, key: number): BinaryTreeNode | null {
    if (!node) return null;

    if (key < Number(node.val)) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > Number(node.val)) {
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
    node.right = this.removeNode(node.right, Number(this.findMinNode(node.right).val));

    return node;
  }

  findMinNode(node: BinaryTreeNode): BinaryTreeNode {
    if (!node.left) return node;
    return this.findMinNode(node.left);
  }

  getRootNode(): BinaryTreeNode | null {
    return this.root;
  }

  search(node: BinaryTreeNode | null, val: number): BinaryTreeNode | null {
    if (!node) return null;
    if (val < Number(node.val)) return this.search(node.left, val);
    if (val > Number(node.val)) return this.search(node.right, val);
    return node;
  }

  BFS(): number[] {
    let node = this.root;
    const results: number[] = [];
    const queue = [node];

    while (queue.length) {
      node = queue.shift() as BinaryTreeNode;
      results.push(Number(node.val));
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return results;
  }

  DFSPreOrder(): number[] {
    const results: number[] = [];

    const traverse = (node: BinaryTreeNode | null) => {
      if (!node) return;
      results.push(Number(node.val));
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return results;
  }

  DFSPostOrder(): number[] {
    const results: number[] = [];

    const traverse = (node: BinaryTreeNode | null) => {
      if (!node) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(Number(node.val));
    };

    traverse(this.root);

    return results;
  }

  DFSInOrder(): number[] {
    const results: number[] = [];

    const traverse = (node: BinaryTreeNode | null) => {
      if (!node) return;
      if (node.left) traverse(node.left);
      results.push(Number(node.val));
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return results;
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
