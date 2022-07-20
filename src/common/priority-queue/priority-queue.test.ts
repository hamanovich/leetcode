import { PriorityQueue } from './priority-queue';

describe('PriorityQueue', () => {
  it('default priority queue', () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue).toBeDefined();
    expect(priorityQueue.isEmpty()).toBeTruthy();
  });

  it('insert items with default priority', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(5);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(100);
    expect(priorityQueue.peek()).toBe(10);

    expect(priorityQueue.toString()).toBe('10,5,100');
  });

  it('insert items to the queue and respect priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(5, 2);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(100, 0);
    expect(priorityQueue.peek()).toBe(100);
  });

  it('use objects in priority queue', () => {
    const priorityQueue = new PriorityQueue();

    const user1 = { name: 'Mike' };
    const user2 = { name: 'Bill' };
    const user3 = { name: 'Jane' };

    priorityQueue.add(user1, 1);
    expect(priorityQueue.peek()).toBe(user1);

    priorityQueue.add(user2, 2);
    expect(priorityQueue.peek()).toBe(user1);

    priorityQueue.add(user3, 0);
    expect(priorityQueue.peek()).toBe(user3);
  });

  it('poll', () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue.poll()).toBeNull();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
    expect(priorityQueue.poll()).toBe(5);
  });

  it('change priority of internal nodes', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(100, 10);
    priorityQueue.changePriority(10, 20);

    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(10);
  });

  it('change priority of head node', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
  });

  it('change priority along with node addition', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);

    priorityQueue.add(15, 15);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(15);
    expect(priorityQueue.poll()).toBe(10);
  });

  it('remove and heapifyDown', () => {
    const heap = new PriorityQueue();

    heap.add(3);
    heap.add(12);
    heap.add(10);
    heap.add(11);
    heap.add(11);

    expect(heap.remove(3).peek()).toEqual(11);
    expect(heap.remove(3).peek()).toEqual(11);
    expect(heap.remove(12).peek()).toEqual(11);
    expect(heap.remove(10).peek()).toEqual(11);
    expect(heap.remove(11).peek()).toEqual(null);
    expect(heap.remove(11).peek()).toEqual(null);
  });

  it('remove and heapifyUp', () => {
    const heap = new PriorityQueue();

    heap.add(3);
    heap.add(10);
    heap.add(5);
    heap.add(6);
    heap.add(7);

    expect(heap.toString()).toBe('3,10,5,6,7');
    expect(heap.remove(7).toString()).toEqual('3,10,5,6');
    expect(heap.remove(6).toString()).toEqual('3,10,5');
    expect(heap.remove(10).toString()).toEqual('3,5');
    expect(heap.remove(5).toString()).toEqual('3');
    expect(heap.remove(3).toString()).toEqual('');
    expect(heap.remove(3).toString()).toEqual('');
  });

  it('removes values, re-order the tree', () => {
    const heap = new PriorityQueue();

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
    expect(heap.toString()).toBe('1,9,3,4,5,6,7,8');

    heap.remove(4);
    expect(heap.toString()).toBe('1,9,3,8,5,6,7');
  });
});
