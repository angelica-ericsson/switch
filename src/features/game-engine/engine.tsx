import { useMemo, useState } from 'react';
import game1 from '../../game-files/game1.json';
import { gameSchema, type NodeType } from './zod-schema';

export function GameEngine() {
  const { nodes, edges } = useMemo(() => generateGameNodeGraph(game1), []);
  const [currentNode, setNode] = useState<NodeType | undefined>();

  return (
    <>
      <h1></h1>
    </>
  );
}

type EdgeTarget =
  | {
      default: string;
    }
  | Record<string, string>;
function generateGameNodeGraph(input: unknown) {
  const parsed = gameSchema.parse(input);

  const nodes = new Map<string, NodeType>();
  parsed.nodes.forEach((node) => nodes.set(node.id, node));

  const edges = new Map<string, EdgeTarget>();
  parsed.edges.forEach((edge) => {
    if (!edge.sourceHandle) {
      edges.set(edge.source, { default: edge.target });
    } else {
      const existing = edges.get(edge.source);
      if (!existing) {
        edges.set(edge.source, { [edge.sourceHandle]: edge.target });
      } else {
        edges.set(edge.source, {
          [edge.sourceHandle]: edge.target,
          ...existing,
        });
      }
    }
  });

  return { nodes, edges };
}
