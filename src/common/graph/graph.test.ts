import { Graph } from './graph';
import { GraphEdge } from './graph-edge/graph-edge';
import { GraphVertex } from './graph-vertex/graph-vertex';

describe('Graph', () => {
  it('add vertices to graph', () => {
    const graph = new Graph();

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    graph.addVertex(vertexA).addVertex(vertexB);

    expect(graph.toString()).toBe('A,B');
    expect(graph.getVertexByKey(vertexA.getKey())).toEqual(vertexA);
    expect(graph.getVertexByKey(vertexB.getKey())).toEqual(vertexB);
  });

  it('add edges to undirected graph', () => {
    const graph = new Graph();

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    const edgeAB = new GraphEdge(vertexA, vertexB);

    graph.addEdge(edgeAB);
    graph.addEdge(edgeAB);

    expect(graph.getAllVertices().length).toBe(2);
    expect(graph.getAllVertices()[0]).toEqual(vertexA);
    expect(graph.getAllVertices()[1]).toEqual(vertexB);

    const graphVertexA = graph.getVertexByKey(vertexA.getKey());
    const graphVertexB = graph.getVertexByKey(vertexB.getKey());

    expect(graph.toString()).toBe('A,B');
    expect(graphVertexA).toBeDefined();
    expect(graphVertexB).toBeDefined();

    expect(graph.getVertexByKey('not existing')).toBeUndefined();

    expect(graphVertexA.getNeighbors().length).toBe(2);
    expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB);
    expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB);

    expect(graphVertexB.getNeighbors().length).toBe(2);
    expect(graphVertexB.getNeighbors()[0]).toEqual(vertexA);
    expect(graphVertexB.getNeighbors()[0]).toEqual(graphVertexA);
  });

  it('add edges to directed graph', () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    const edgeAB = new GraphEdge(vertexA, vertexB);

    graph.addEdge(edgeAB);

    const graphVertexA = graph.getVertexByKey(vertexA.getKey());
    const graphVertexB = graph.getVertexByKey(vertexB.getKey());

    expect(graph.toString()).toBe('A,B');
    expect(graphVertexA).toBeDefined();
    expect(graphVertexB).toBeDefined();

    expect(graphVertexA.getNeighbors().length).toBe(1);
    expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB);
    expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB);

    expect(graphVertexB.getNeighbors().length).toBe(0);
  });

  it('find edge by vertices in undirected graph', () => {
    const graph = new Graph();

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB, 10);

    graph.addEdge(edgeAB);

    const graphEdgeAB = graph.findEdge(vertexA, vertexB);
    const graphEdgeBA = graph.findEdge(vertexB, vertexA);
    const graphEdgeAC = graph.findEdge(vertexA, vertexC);
    const graphEdgeCA = graph.findEdge(vertexC, vertexA);

    expect(graphEdgeAC).toBeNull();
    expect(graphEdgeCA).toBeNull();
    expect(graphEdgeAB).toEqual(edgeAB);
    expect(graphEdgeBA).toEqual(edgeAB);
    expect(graphEdgeAB?.weight).toBe(10);
  });

  it('find edge by vertices in directed graph', () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB, 10);

    graph.addEdge(edgeAB);

    const graphEdgeAB = graph.findEdge(vertexA, vertexB);
    const graphEdgeBA = graph.findEdge(vertexB, vertexA);
    const graphEdgeAC = graph.findEdge(vertexA, vertexC);
    const graphEdgeCA = graph.findEdge(vertexC, vertexA);

    expect(graphEdgeAC).toBeNull();
    expect(graphEdgeCA).toBeNull();
    expect(graphEdgeBA).toBeNull();
    expect(graphEdgeAB).toEqual(edgeAB);
    expect(graphEdgeAB?.weight).toBe(10);
  });

  it('return the list of all added edges', () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);

    graph.addEdge(edgeAB).addEdge(edgeBC);

    const edges = graph.getAllEdges();

    expect(edges.length).toBe(2);
    expect(edges[0]).toEqual(edgeAB);
    expect(edges[1]).toEqual(edgeBC);
  });

  it('be possible to delete edges from graph', () => {
    const graph = new Graph();

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeAC = new GraphEdge(vertexA, vertexC);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeAC);

    expect(graph.getAllEdges().length).toBe(3);

    graph.deleteEdge(edgeAB);

    expect(graph.getAllEdges().length).toBe(2);
    expect(graph.getAllEdges()[0].getKey()).toBe(edgeBC.getKey());
    expect(graph.getAllEdges()[1].getKey()).toBe(edgeAC.getKey());
  });

  it('throw an error when trying to delete not existing edge', () => {
    function deleteNotExistingEdge() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeBC = new GraphEdge(vertexB, vertexC);

      graph.addEdge(edgeAB);
      graph.deleteEdge(edgeBC);
    }

    expect(deleteNotExistingEdge).toThrowError();
  });
});
