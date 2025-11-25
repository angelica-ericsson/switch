import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Panel } from '@xyflow/react';
import { useReactFlow } from '@xyflow/react';
import { Search } from 'lucide-react';
import { useState, type KeyboardEvent } from 'react';

export function SearchToolbar() {
  const reactFlow = useReactFlow();
  const [nodeId, setNodeId] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    if (!nodeId.trim()) {
      setError('Please enter a node ID');
      return;
    }

    const node = reactFlow.getNode(nodeId.trim());

    if (!node) {
      setError(`Node with ID "${nodeId.trim()}" not found`);
      return;
    }

    setError(null);

    // Select the target node and deselect all others
    reactFlow.setNodes((nodes) => nodes.map((n) => (n.id === nodeId.trim() ? { ...n, selected: true } : { ...n, selected: false })));

    // Zoom to and center on the node
    const nodePosition = node.position;
    const nodeWidth = node.width || 150;
    const nodeHeight = node.height || 100;

    reactFlow.setCenter(nodePosition.x + nodeWidth / 2, nodePosition.y + nodeHeight / 2, { zoom: 1.5, duration: 500 });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <Panel position="top-right" style={{ top: 45 }}>
      <div className="bg-background flex items-center gap-2 rounded-md border p-2 shadow">
        <Search className="text-muted-foreground size-4" />
        <Input
          type="text"
          placeholder="Search by node ID..."
          value={nodeId}
          onChange={(e) => {
            setNodeId(e.target.value);
            setError(null);
          }}
          onKeyDown={handleKeyDown}
          className="w-64"
          aria-invalid={error !== null}
        />
        <Button onClick={handleSearch} size="sm">
          Go
        </Button>
        {error && <span className="text-destructive text-sm whitespace-nowrap">{error}</span>}
      </div>
    </Panel>
  );
}
