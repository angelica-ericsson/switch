import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
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
import { fdOrNull } from '@/lib/editorNodeHelpers';
import { cn } from '@/lib/utils';
import {
  Position,
  useReactFlow,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import { Cog, Pencil } from 'lucide-react';
import { useState } from 'react';

type SetStateNodeType = Node<
  {
    demandA: number;
    demandB: number;
    priceA: number;
    priceB: number;
    sentimentPro: number;
    sentimentNeutral: number;
    sentimentAgainst: number;
  },
  'setState'
>;

export function SetStateNode({ data, id }: NodeProps<SetStateNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="bg-pink-50 border-pink-700">
      <BaseNodeHeader>
        <Cog />
        <BaseNodeHeaderTitle>Set Game State</BaseNodeHeaderTitle>
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
                reactFlow.updateNodeData(id, {
                  demandA: fdOrNull(formData.get('demandA')),
                  demandB: fdOrNull(formData.get('demandB')),
                  priceA: fdOrNull(formData.get('priceA')),
                  priceB: fdOrNull(formData.get('priceB')),
                  sentimentPro: fdOrNull(formData.get('sentimentPro')),
                  sentimentNeutral: fdOrNull(formData.get('sentimentNeutral')),
                  sentimentAgainst: fdOrNull(formData.get('sentimentAgainst')),
                });
                setOpen(false);
              }}
              className="gap-4 grid"
            >
              <DialogHeader>
                <DialogTitle>Configure Game State</DialogTitle>
              </DialogHeader>
              <Field>
                <FieldLabel>Product A:</FieldLabel>
                <div className="flex gap-2">
                  <Input
                    placeholder="Demand"
                    name="demandA"
                    type="number"
                    defaultValue={data.demandA}
                  />
                  <Input
                    placeholder="Price"
                    name="priceA"
                    type="number"
                    defaultValue={data.priceA}
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel>Product B:</FieldLabel>
                <div className="flex gap-2">
                  <Input
                    placeholder="Demand"
                    name="demandB"
                    type="number"
                    defaultValue={data.demandB}
                  />
                  <Input
                    placeholder="Price"
                    name="priceB"
                    type="number"
                    defaultValue={data.priceB}
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel>Sentiment:</FieldLabel>
                <div className="flex gap-2">
                  <Input
                    placeholder="Pro"
                    name="sentimentPro"
                    type="number"
                    defaultValue={data.sentimentPro}
                  />
                  <Input
                    placeholder="Neutral"
                    name="sentimentNeutral"
                    type="number"
                    defaultValue={data.sentimentNeutral}
                  />
                  <Input
                    placeholder="Against"
                    name="sentimentAgainst"
                    type="number"
                    defaultValue={data.sentimentAgainst}
                  />
                </div>
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
        <BaseHandle type="target" position={Position.Left} />
        <BaseHandle type="source" position={Position.Right} />

        <div className="flex gap-4">
          <p className="font-medium">Product A:</p>
          <Variable text="Demand" value={data.demandA} />
          <Variable text="Price" value={data.priceA} />
        </div>
        <div className="flex gap-4">
          <p className="font-medium">Product B:</p>
          <Variable text="Demand" value={data.demandB} />
          <Variable text="Price" value={data.priceB} />
        </div>
        <div className="flex gap-4">
          <p className="font-medium">Sentiment:</p>
          <Variable text="Pro" value={data.sentimentPro} />
          <Variable text="Ntrl" value={data.sentimentNeutral} />
          <Variable text="Agst" value={data.sentimentAgainst} />
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
        className={cn(
          'bg-gray-100 font-mono ml-1 px-1 rounded-sm border-gray-300 border',
          props.value ? 'font-semibold' : 'text-gray-400',
        )}
      >
        {props.value ?? '∅'}
      </span>
    </p>
  );
}
