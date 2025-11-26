import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeader, BaseNodeHeaderTitle } from '@/components/base-node';
import { NumberedHandle } from '@/components/numbered-handle';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import { Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { Image, Pencil } from 'lucide-react';
import { useState } from 'react';

type SceneNodeType = Node<
  {
    textA: string;
    textB: string;
    option1A: string;
    option1B: string;
    option2A: string;
    option2B: string;
    option3A: string;
    option3B: string;
    eventId: string | null;
  },
  'scene'
>;

export function SceneNode({ data, id }: NodeProps<SceneNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="max-w-[600px] border-indigo-700 bg-indigo-50">
      <BaseNodeHeader>
        <Image className="text-indigo-800" />
        <BaseNodeHeaderTitle className="text-indigo-800">Scene</BaseNodeHeaderTitle>
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
                  textA: fdOrNull(formData.get('textA')),
                  textB: fdOrNull(formData.get('textB')),
                  option1A: fdOrNull(formData.get('option1A')),
                  option1B: fdOrNull(formData.get('option1B')),
                  option2A: fdOrNull(formData.get('option2A')),
                  option2B: fdOrNull(formData.get('option2B')),
                  option3A: fdOrNull(formData.get('option3A')),
                  option3B: fdOrNull(formData.get('option3B')),
                  eventId: fdOrNull(formData.get('eventId')),
                });
                setOpen(false);
              }}
              className="grid gap-4"
            >
              <DialogHeader>
                <DialogTitle>Configure Scene</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-2">
                <Label>Translation Key for Variant A:</Label>
                <Input placeholder="Text Variant A" name="textA" defaultValue={data.textA} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Translation Key for Variant B:</Label>
                <Input placeholder="Text Variant B" name="textB" defaultValue={data.textB} />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Option 1:</Label>
                <Input placeholder="Translation Key for Variant A" name="option1A" defaultValue={data.option1A} />
                <Input placeholder="Translation Key for Variant B" name="option1B" defaultValue={data.option1B} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Option 2:</Label>
                <Input placeholder="Translation Key for Variant A" name="option2A" defaultValue={data.option2A} />
                <Input placeholder="Translation Key for Variant B" name="option2B" defaultValue={data.option2B} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Option 3:</Label>
                <Input placeholder="Translation Key for Variant A" name="option3A" defaultValue={data.option3A} />
                <Input placeholder="Translation Key for Variant B" name="option3B" defaultValue={data.option3B} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Event ID:</Label>
                <Input placeholder="Optional event identifier" name="eventId" defaultValue={data.eventId ?? ''} />
              </div>
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
        <div className="grid grid-cols-2 gap-1">
          <p>Variant A:</p>
          <p>Variant B:</p>
          <p className="line-clamp-6 rounded-md border border-indigo-700 bg-white p-2">{data.textA ?? 'No text'}</p>
          <p className="line-clamp-6 rounded-md border border-indigo-700 bg-white p-2">{data.textB ?? 'No text'}</p>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <p className="font-semibold">Options Variant A:</p>
          <p className="font-semibold">Options Variant B:</p>
          <ol className="list-inside list-decimal space-y-2">
            <li>{data.option1A ?? <NotUsed />}</li>
            <li>{data.option2A ?? <NotUsed />}</li>
            <li>{data.option3A ?? <NotUsed />}</li>
          </ol>
          <ol className="list-inside list-decimal space-y-2">
            <li>{data.option1B ?? <NotUsed />}</li>
            <li>{data.option2B ?? <NotUsed />}</li>
            <li>{data.option3B ?? <NotUsed />}</li>
          </ol>
        </div>
        <div>
          <p className="mb-1 text-sm font-semibold">Event ID:</p>
          <p className="rounded-md border border-indigo-700 bg-white p-2 text-sm">{data.eventId}</p>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <NumberedHandle type="source" position={Position.Bottom} id="option1" style={{ left: '25%' }} number="1" />
        <NumberedHandle type="source" position={Position.Bottom} id="option2" number="2" />
        <NumberedHandle type="source" position={Position.Bottom} id="option3" style={{ left: '75%' }} number="3" />
      </BaseNodeContent>
    </BaseNode>
  );
}

function NotUsed() {
  return <span className="text-gray-400">Not in use</span>;
}
