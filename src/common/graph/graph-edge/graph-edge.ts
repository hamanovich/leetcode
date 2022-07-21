import { GraphVertex } from './../graph-vertex/graph-vertex';
export class GraphEdge {
  startVertex: GraphVertex;
  endVertex: GraphVertex;
  weight: number;

  constructor(startVertex: GraphVertex, endVertex: GraphVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  getKey(): string {
    const startVertexKey = this.startVertex.getKey();
    const endVertexKey = this.endVertex.getKey();

    return `${startVertexKey}_${endVertexKey}`;
  }

  toString(): string {
    return this.getKey();
  }
}
