import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeader, BaseNodeHeaderTitle } from '@/components/base-node';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import { Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { Banknote, Pencil } from 'lucide-react';
import { useState } from 'react';

type StockUpNodeType = Node<
  {
    date: string;
  },
  'stockUp'
>;

export function StockUpNode({ data, id }: NodeProps<StockUpNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="border-sky-700 bg-sky-50">
      <BaseNodeHeader>
        <Banknote />
        <BaseNodeHeaderTitle>Stock up</BaseNodeHeaderTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon-sm" className="nodrag rounded-full">
              <Pencil className="size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              action={(formData) => {
                reactFlow.updateNodeData(id, {
                  date: fdOrNull(formData.get('date')),
                });
                setOpen(false);
              }}
              className="grid gap-4"
            >
              <DialogHeader>
                <DialogTitle>Configure Stock Up</DialogTitle>
              </DialogHeader>
              <Field>
                <FieldLabel>Date when the purchase of products happens in game time:</FieldLabel>
                <Input type="date" name="date" defaultValue={data?.date || ''} />
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
        <BaseHandle type="source" position={Position.Bottom} />
        <div>
          <p className="mb-1 text-sm font-semibold">Date:</p>
          <p className="rounded-md border border-sky-700 bg-white p-2 text-sm">
            {data.date
              ? new Date(data.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
              : 'Current date'}
          </p>
        </div>
      </BaseNodeContent>
    </BaseNode>
  );
}
