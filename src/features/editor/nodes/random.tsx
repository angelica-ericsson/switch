import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
import { Position } from '@xyflow/react';
import { Shuffle } from 'lucide-react';

export function RandomNode() {
  return (
    <BaseNode className="bg-yellow-50 border-yellow-700">
      <BaseNodeContent>
        <div className="flex gap-2 p-2">
          <Shuffle />
          <BaseNodeHeaderTitle>Random</BaseNodeHeaderTitle>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <BaseHandle
          type="source"
          position={Position.Bottom}
          style={{ left: '25%' }}
          id="option1"
        />
        <BaseHandle
          type="source"
          position={Position.Bottom}
          style={{ left: '75%' }}
          id="option2"
        />
      </BaseNodeContent>
    </BaseNode>
  );
}
