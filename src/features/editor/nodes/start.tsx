import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
import { Position } from '@xyflow/react';
import { CirclePlay } from 'lucide-react';

export function StartNode() {
  return (
    <BaseNode className="bg-green-50 border-green-700">
      <BaseNodeContent>
        <div className="flex gap-2 p-2">
          <CirclePlay />
          <BaseNodeHeaderTitle>Game Start</BaseNodeHeaderTitle>
        </div>
        <BaseHandle type="source" position={Position.Bottom} />
      </BaseNodeContent>
    </BaseNode>
  );
}
