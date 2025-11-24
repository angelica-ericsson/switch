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
    option1: string;
    option2: string;
    option3: string;
  },
  'scene'
>;

export function SceneNode({ data, id }: NodeProps<SceneNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="max-w-[500px] border-indigo-700 bg-indigo-50">
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
                  option1: fdOrNull(formData.get('option1')),
                  option2: fdOrNull(formData.get('option2')),
                  option3: fdOrNull(formData.get('option3')),
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
                <Input placeholder="Text Variant B" name="textB" defaultValue={data.textA} />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Options:</Label>
                <Input placeholder="Option 1" name="option1" defaultValue={data.option1} />
                <Input placeholder="Option 2" name="option2" defaultValue={data.option2} />
                <Input placeholder="Option 3" name="option3" defaultValue={data.option3} />
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
        <ol className="list-inside list-decimal space-y-2">
          <li>{data.option1 ?? <NotUsed />}</li>
          <li>{data.option2 ?? <NotUsed />}</li>
          <li>{data.option3 ?? <NotUsed />}</li>
        </ol>
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
