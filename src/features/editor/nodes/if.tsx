import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
import { NumberedHandle } from '@/components/numbered-handle';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  Position,
  useReactFlow,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import { GitBranch, Pencil } from 'lucide-react';
import { useState } from 'react';

type IfNodeType = Node<
  {
    threshold: number | null | undefined;
  },
  'if'
>;

export function IfNode({ data, id }: NodeProps<IfNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="bg-purple-50 border-purple-700">
      <BaseNodeHeader>
        <GitBranch />
        <BaseNodeHeaderTitle>If (stockA)</BaseNodeHeaderTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon-sm"
              className="nodrag rounded-full"
            >
              <Pencil className="size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              action={(formData) => {
                const thresholdValue = formData.get('threshold');
                const threshold =
                  thresholdValue && typeof thresholdValue === 'string'
                    ? thresholdValue.trim() === ''
                      ? null
                      : parseFloat(thresholdValue) || null
                    : null;
                reactFlow.updateNodeData(id, {
                  threshold,
                });
                setOpen(false);
              }}
              className="gap-4 grid"
            >
              <DialogHeader>
                <DialogTitle>Configure If Condition</DialogTitle>
              </DialogHeader>
              <Field>
                <FieldLabel>Threshold</FieldLabel>
                <Input
                  placeholder="Enter number"
                  name="threshold"
                  type="number"
                  defaultValue={data.threshold ?? undefined}
                />
              </Field>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </BaseNodeHeader>
      <BaseNodeContent>
        <BaseHandle type="target" position={Position.Top} />
        <NumberedHandle
          type="source"
          position={Position.Bottom}
          style={{ left: '25%' }}
          id="lowerOrEqual"
          number="≤"
        />
        <NumberedHandle
          type="source"
          position={Position.Bottom}
          style={{ left: '75%' }}
          id="higher"
          number=">"
        />
        <div className="flex gap-4 items-center">
          <p className="font-medium">stockA</p>
          <span className="text-gray-500">≤</span>
          <span
            className={cn(
              'bg-gray-100 font-mono px-2 py-1 rounded-sm border-gray-300 border',
              data.threshold != null ? 'font-semibold' : 'text-gray-400',
            )}
          >
            {data.threshold != null ? data.threshold : '∅'}
          </span>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <p className="font-medium">stockA</p>
          <span className="text-gray-500">&gt;</span>
          <span
            className={cn(
              'bg-gray-100 font-mono px-2 py-1 rounded-sm border-gray-300 border',
              data.threshold != null ? 'font-semibold' : 'text-gray-400',
            )}
          >
            {data.threshold != null ? data.threshold : '∅'}
          </span>
        </div>
      </BaseNodeContent>
    </BaseNode>
  );
}
