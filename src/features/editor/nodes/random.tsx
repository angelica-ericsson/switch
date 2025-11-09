import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
import { LabeledHandle } from '@/components/labeled-handle';
import { Position } from '@xyflow/react';
import { Shuffle } from 'lucide-react';

export function RandomNode() {
  return (
    <BaseNode className="bg-yellow-50 border-yellow-700">
      <BaseNodeHeader>
        <Shuffle />
        <BaseNodeHeaderTitle>Random</BaseNodeHeaderTitle>
      </BaseNodeHeader>
      <BaseNodeContent>
        <BaseHandle type="target" position={Position.Left} />
        <LabeledHandle
          type="source"
          position={Position.Right}
          title="50%"
          id="option1"
        />
        <LabeledHandle
          type="source"
          position={Position.Right}
          title="50%"
          id="option2"
        />
      </BaseNodeContent>
    </BaseNode>
  );
}
