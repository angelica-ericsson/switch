import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeader, BaseNodeHeaderTitle } from '@/components/base-node';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import { cn } from '@/lib/utils';
import { Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { Cog, Pencil } from 'lucide-react';
import { useState } from 'react';

type SetStateNodeType = Node<
  {
    demandA: number;
    demandB: number;
    sentimentPro: number;
    sentimentNeutral: number;
    sentimentAgainst: number;
    date: string;
  },
  'setState'
>;

export function SetStateNode({ data, id }: NodeProps<SetStateNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="border-pink-700 bg-pink-50">
      <BaseNodeHeader>
        <Cog />
        <BaseNodeHeaderTitle>Set Game State</BaseNodeHeaderTitle>
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
                  demandA: fdOrNull(formData.get('demandA')),
                  demandB: fdOrNull(formData.get('demandB')),
                  sentimentPro: fdOrNull(formData.get('sentimentPro')),
                  sentimentNeutral: fdOrNull(formData.get('sentimentNeutral')),
                  sentimentAgainst: fdOrNull(formData.get('sentimentAgainst')),
                  date: fdOrNull(formData.get('date')),
                });
                setOpen(false);
              }}
              className="grid gap-4"
            >
              <DialogHeader>
                <DialogTitle>Configure Game State</DialogTitle>
              </DialogHeader>
              <Field>
                <FieldLabel>Product A:</FieldLabel>
                <div className="flex gap-2">
                  <Input placeholder="Demand" name="demandA" type="number" defaultValue={data.demandA} />
                </div>
              </Field>
              <Field>
                <FieldLabel>Product B:</FieldLabel>
                <div className="flex gap-2">
                  <Input placeholder="Demand" name="demandB" type="number" defaultValue={data.demandB} />
                </div>
              </Field>
              <Field>
                <FieldLabel>Sentiment:</FieldLabel>
                <div className="flex gap-2">
                  <Input placeholder="Pro" name="sentimentPro" type="number" defaultValue={data.sentimentPro} />
                  <Input placeholder="Neutral" name="sentimentNeutral" type="number" defaultValue={data.sentimentNeutral} />
                  <Input placeholder="Against" name="sentimentAgainst" type="number" defaultValue={data.sentimentAgainst} />
                </div>
              </Field>
              <Field>
                <FieldLabel>Date when the sales of products happens in game time:</FieldLabel>
                <Input type="date" name="date" defaultValue={data.date || ''} />
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

        <div className="flex gap-4">
          <p className="font-medium">Product A:</p>
          <Variable text="Demand" value={data.demandA} />
        </div>
        <div className="flex gap-4">
          <p className="font-medium">Product B:</p>
          <Variable text="Demand" value={data.demandB} />
        </div>
        <div className="flex gap-4">
          <p className="font-medium">Sentiment:</p>
          <Variable text="Pro" value={data.sentimentPro} />
          <Variable text="Ntrl" value={data.sentimentNeutral} />
          <Variable text="Agst" value={data.sentimentAgainst} />
        </div>
        <div>
          <p className="mb-1 text-sm font-semibold">Date:</p>
          <p className="rounded-md border border-pink-700 bg-white p-2 text-sm">
            {data.date
              ? new Date(data.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
              : 'Current date'}
          </p>
        </div>
      </BaseNodeContent>
    </BaseNode>
  );
}

function Variable(props: { text: string; value: number }) {
  return (
    <p className="text-right">
      {props.text}
      <span
        className={cn('ml-1 rounded-sm border border-gray-300 bg-gray-100 px-1 font-mono', props.value ? 'font-semibold' : 'text-gray-400')}
      >
        {props.value ?? '∅'}
      </span>
    </p>
  );
}
