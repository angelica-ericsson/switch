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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import {
  Position,
  useReactFlow,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import { CircleStop, Pencil } from 'lucide-react';
import { useState } from 'react';

type EndGameNodeType = Node<
  {
    headline: string;
    text: string;
  },
  'end'
>;

export function EndNode({ data, id }: NodeProps<EndGameNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="bg-orange-50 border-orange-700">
      <BaseNodeHeader>
        <CircleStop className="text-orange-800" />
        <BaseNodeHeaderTitle className="text-orange-800">
          {data.headline ?? (
            <span className="text-orange-700/50">No headline</span>
          )}
        </BaseNodeHeaderTitle>{' '}
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
                  headline: fdOrNull(formData.get('headline')),
                  text: fdOrNull(formData.get('text')),
                });
                setOpen(false);
              }}
              className="gap-4 grid"
            >
              <DialogHeader>
                <DialogTitle>Configure End Game Screen</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Headline"
                name="headline"
                defaultValue={data.headline}
              />
              <Textarea
                placeholder="Text"
                name="text"
                defaultValue={data.text}
              />
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
        <p className="font-mono text-xs bg-white border border-orange-700 p-2 rounded-md">
          {data.text ?? 'No text'}
        </p>
        <BaseHandle type="target" position={Position.Left} />
      </BaseNodeContent>
    </BaseNode>
  );
}
