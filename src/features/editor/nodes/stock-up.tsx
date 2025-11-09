import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
import { Position } from '@xyflow/react';
import { Banknote } from 'lucide-react';

export function StockUpNode() {
  return (
    <BaseNode className="bg-sky-50 border-sky-700">
      <BaseNodeContent>
        <div className="flex gap-2 p-2">
          <Banknote />
          <BaseNodeHeaderTitle>Stock up</BaseNodeHeaderTitle>
        </div>
        <BaseHandle type="target" position={Position.Left} />
        <BaseHandle type="source" position={Position.Right} />
      </BaseNodeContent>
    </BaseNode>
  );
}
