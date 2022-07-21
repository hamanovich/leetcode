import { GraphEdge } from './../graph-edge/graph-edge';
import { LinkedList } from '../../linked-list/linked-list';
import { LinkedListNode } from '../../linked-list/linked-list-node/linked-list-node';

export class GraphVertex<T = unknown> {
  value: T;
  edges: LinkedList<GraphEdge>;

  constructor(value: T) {
    this.value = value;
    this.edges = new LinkedList<GraphEdge>();
  }

  addEdge(edge: GraphEdge): GraphVertex<T> {
    this.edges.append(edge);

    return this;
  }

  deleteEdge(edge: GraphEdge): void {
    this.edges.delete(edge);
  }

  getNeighbors(): GraphVertex[] {
    const edges = this.edges.toArray();

    const neighborsConverter = (node: LinkedListNode<GraphEdge>) => {
      return node.value.startVertex === this ? node.value.endVertex : node.value.startVertex;
    };

    return edges.map(neighborsConverter);
  }

  getEdges(): GraphEdge[] {
    return this.edges.toArray().map(linkedListNode => linkedListNode.value);
  }

  getDegree(): number {
    return this.edges.toArray().length;
  }

  hasEdge(requiredEdge: GraphEdge): boolean {
    const edgeNode = this.edges.find({
      callback: edge => edge === requiredEdge,
    });

    return !!edgeNode;
  }

  hasNeighbor(vertex: GraphVertex<T>): boolean {
    const edgeToNeighbor = this.edges.find({
      callback: edge => edge.startVertex === vertex || edge.endVertex === vertex,
    });

    return !!edgeToNeighbor;
  }

  findEdge(vertex: GraphVertex<T>): GraphEdge | null {
    const edgeFinder = (edge: GraphEdge) => edge.startVertex === vertex || edge.endVertex === vertex;
    const edge = this.edges.find({ callback: edgeFinder }) as LinkedListNode<GraphEdge>;

    return edge ? edge.value : null;
  }

  getKey(): T {
    return this.value;
  }

  deleteAllEdges(): GraphVertex<T> {
    this.getEdges().forEach(edge => this.deleteEdge(edge));

    return this;
  }

  toString(): string {
    return `${this.value}`;
  }
}
