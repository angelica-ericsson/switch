import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeaderTitle } from '@/components/base-node';
import { Position } from '@xyflow/react';
import { ClipboardList } from 'lucide-react';

export function SurveyNode() {
  return (
    <BaseNode className="border-purple-700 bg-purple-50">
      <BaseNodeContent>
        <div className="flex gap-2 p-2">
          <ClipboardList />
          <BaseNodeHeaderTitle>Survey</BaseNodeHeaderTitle>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <BaseHandle type="source" position={Position.Bottom} />
      </BaseNodeContent>
    </BaseNode>
  );
}
