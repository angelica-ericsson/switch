import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeader, BaseNodeHeaderTitle } from '@/components/base-node';
import { NumberedHandle } from '@/components/numbered-handle';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { GitBranch, Pencil } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type IfNodeType = Node<
  {
    threshold: number | null | undefined;
  },
  'if'
>;

export function IfNode({ data, id }: NodeProps<IfNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <BaseNode className="border-purple-700 bg-purple-50">
      <BaseNodeHeader>
        <GitBranch />
        <BaseNodeHeaderTitle>Control Flow</BaseNodeHeaderTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon-sm" className="nodrag rounded-full">
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
              className="grid gap-4"
            >
              <DialogHeader>
                <DialogTitle>Configure If Condition</DialogTitle>
              </DialogHeader>
              <Field>
                <FieldLabel>"{t('productA')}" Threshold</FieldLabel>
                <Input placeholder="Enter number" name="threshold" type="number" defaultValue={data.threshold ?? undefined} />
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
        <NumberedHandle type="source" position={Position.Bottom} style={{ left: '25%' }} id="lowerOrEqual" number="low or eq" />
        <NumberedHandle type="source" position={Position.Bottom} style={{ left: '75%' }} id="higher" number="higher" />
        <div className="flex items-center gap-4">
          <p className="font-medium">Last buy of "{t('productA')}" – threshold</p>
          <span
            className={cn(
              'rounded-sm border border-gray-300 bg-gray-100 px-2 py-1',
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
