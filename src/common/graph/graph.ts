import { GraphEdge } from './graph-edge/graph-edge';
import { GraphVertex } from './graph-vertex/graph-vertex';

export class Graph {
  isDirected: boolean;
  vertices: Record<string, GraphVertex>;
  edges: Record<string, GraphEdge>;

  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  addVertex(newVertex: GraphVertex): Graph {
    this.vertices[newVertex.getKey() as string] = newVertex;

    return this;
  }

  getVertexByKey(vertexKey: string): GraphVertex {
    return this.vertices[vertexKey];
  }

  getAllVertices(): GraphVertex[] {
    return Object.values(this.vertices);
  }

  getAllEdges(): GraphEdge[] {
    return Object.values(this.edges);
  }

  addEdge(edge: GraphEdge): Graph {
    let startVertex = this.getVertexByKey(edge.startVertex.getKey() as string);
    let endVertex = this.getVertexByKey(edge.endVertex.getKey() as string);

    if (!this.edges[edge.getKey()]) this.edges[edge.getKey()] = edge;

    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey() as string);
    }

    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey() as string);
    }

    if (this.isDirected) startVertex.addEdge(edge);
    else {
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  deleteEdge(edge: GraphEdge): void {
    if (this.edges[edge.getKey()]) delete this.edges[edge.getKey()];
    else throw new Error('Edge not found in graph');

    const startVertex = this.getVertexByKey(edge.startVertex.getKey() as string);
    const endVertex = this.getVertexByKey(edge.endVertex.getKey() as string);

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }

  findEdge(startVertex: GraphVertex, endVertex: GraphVertex): GraphEdge | null {
    const vertex = this.getVertexByKey(startVertex.getKey() as string);

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  toString(): string {
    return Object.keys(this.vertices).toString();
  }
}
