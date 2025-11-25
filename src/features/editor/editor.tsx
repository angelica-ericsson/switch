import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  MarkerType,
  MiniMap,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';
import { SceneNode } from './nodes/scene';
import { useLocalStorage } from 'usehooks-ts';

import { EditorToolbar } from './nodeToolbar';
import { useCallback } from 'react';
import { StockUpNode } from './nodes/stock-up';
import { SetStateNode } from './nodes/set-state';
import { StartNode } from './nodes/start';
import { EndNode } from './nodes/end';
import { RandomNode } from './nodes/random';
import { IfNode } from './nodes/if';
import { NewsFlashNode } from './nodes/news-flash';
import { SocialNode } from './nodes/social';
import { SurveyNode } from './nodes/survey';
import { ImportExportToolbar } from './importExportToolbar';

const nodeTypes = {
  scene: SceneNode,
  stockUp: StockUpNode,
  start: StartNode,
  end: EndNode,
  setState: SetStateNode,
  random: RandomNode,
  if: IfNode,
  newsFlash: NewsFlashNode,
  social: SocialNode,
  survey: SurveyNode,
};

export function Editor() {
  const [nodes, setNodes] = useLocalStorage<Node[]>('editor/nodes', []);
  const [edges, setEdges] = useLocalStorage<Edge[]>('editor/edges', []);

  const onNodesChange: OnNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);
  const onConnect: OnConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes}
          maxZoom={5}
          minZoom={0.1}
          defaultEdgeOptions={{
            markerEnd: { type: MarkerType.ArrowClosed },
            style: { strokeWidth: 4 },
          }}
          panOnScroll
          selectionOnDrag
          panOnDrag={[1, 2]}
        >
          <EditorToolbar />
          <ImportExportToolbar />
          <Background color="var(--secondary-foreground)" bgColor="var(--primary-foreground)" variant={BackgroundVariant.Dots} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
