import { BinaryHeap } from './binary-heap';

describe('Heap', () => {
  it('creates Heap and its empty', () => {
    const heap = new BinaryHeap();

    expect(heap).toBeDefined();
    expect(heap.peek()).toBeNull();
    expect(heap.isEmpty()).toBe(true);
  });

  it('add/has/peek', () => {
    const heap = new BinaryHeap();

    heap.add(5);
    expect(heap.isEmpty()).toBe(false);
    expect(heap.has(5)).toBe(true);
    expect(heap.has(500)).toBe(false);
    expect(heap.peek()).toBe(5);

    heap.add(3);
    expect(heap.peek()).toBe(3);
    expect(heap.has(3)).toBe(true);
    expect(heap.has(300)).toBe(false);

    heap.add(10);
    expect(heap.peek()).toBe(3);

    heap.add(1);
    expect(heap.peek()).toBe(1);

    heap.add(1);
    expect(heap.peek()).toBe(1);
    expect(heap.toString()).toBe('1,1,10,5,3');
    expect(heap.poll()).toBe(1);
    expect(heap.poll()).toBe(1);
    expect(heap.poll()).toBe(3);
  });

  it('heapify it down', () => {
    const heap = new BinaryHeap();

    heap.add(5);
    heap.add(3);
    heap.add(10);
    heap.add(11);
    heap.add(1);

    expect(heap.toString()).toBe('1,3,10,11,5');

    expect(heap.poll()).toBe(1);
    expect(heap.toString()).toBe('3,5,10,11');

    expect(heap.poll()).toBe(3);
    expect(heap.toString()).toBe('5,11,10');

    expect(heap.poll()).toBe(5);
    expect(heap.toString()).toBe('10,11');

    expect(heap.poll()).toBe(10);
    expect(heap.toString()).toBe('11');

    expect(heap.poll()).toBe(11);
    expect(heap.toString()).toBe('');

    expect(heap.poll()).toBeNull();
    expect(heap.toString()).toBe('');
  });

  it('heapify down through the right branch as well', () => {
    const heap = new BinaryHeap();

    heap.add(3);
    heap.add(12);
    heap.add(10);

    expect(heap.toString()).toBe('3,12,10');

    heap.add(11);
    expect(heap.toString()).toBe('3,11,10,12');

    expect(heap.poll()).toBe(3);
    expect(heap.toString()).toBe('10,11,12');
  });

  it('finds item indices in heap', () => {
    const heap = new BinaryHeap();

    heap.add(3);
    heap.add(12);
    heap.add(10);
    heap.add(11);
    heap.add(11);

    expect(heap.toString()).toBe('3,11,10,12,11');

    expect(heap.find(5)).toEqual([]);
    expect(heap.find(3)).toEqual([0]);
    expect(heap.find(11)).toEqual([1, 4]);
  });

  it('remove and heapifyDown', () => {
    const heap = new BinaryHeap();

    heap.add(3);
    heap.add(12);
    heap.add(10);
    heap.add(11);
    heap.add(11);

    expect(heap.toString()).toBe('3,11,10,12,11');

    expect(heap.remove(3).toString()).toEqual('10,11,11,12');
    expect(heap.remove(3).peek()).toEqual(10);
    expect(heap.remove(11).toString()).toEqual('10,12');
    expect(heap.remove(3).peek()).toEqual(10);
  });

  it('remove and heapifyUp', () => {
    const heap = new BinaryHeap();

    heap.add(3);
    heap.add(10);
    heap.add(5);
    heap.add(6);
    heap.add(7);
    heap.add(4);
    heap.add(6);
    heap.add(8);
    heap.add(2);
    heap.add(1);

    expect(heap.toString()).toBe('1,2,4,6,3,5,6,10,8,7');
    expect(heap.remove(8).toString()).toEqual('1,2,4,6,3,5,6,10,7');
    expect(heap.remove(7).toString()).toEqual('1,2,4,6,3,5,6,10');
    expect(heap.remove(1).toString()).toEqual('2,3,4,6,10,5,6');
    expect(heap.remove(2).toString()).toEqual('3,6,4,6,10,5');
    expect(heap.remove(6).toString()).toEqual('3,5,4,10');
    expect(heap.remove(10).toString()).toEqual('3,5,4');
    expect(heap.remove(5).toString()).toEqual('3,4');
    expect(heap.remove(3).toString()).toEqual('4');
    expect(heap.remove(4).toString()).toEqual('');
  });

  it('removes values, re-order the tree', () => {
    const heap = new BinaryHeap();

    heap.add(1);
    heap.add(2);
    heap.add(3);
    heap.add(4);
    heap.add(5);
    heap.add(6);
    heap.add(7);
    heap.add(8);
    heap.add(9);

    expect(heap.toString()).toBe('1,2,3,4,5,6,7,8,9');

    heap.remove(2);
    expect(heap.toString()).toBe('1,4,3,8,5,6,7,9');

    heap.remove(4);
    expect(heap.toString()).toBe('1,5,3,8,9,6,7');
  });
});
