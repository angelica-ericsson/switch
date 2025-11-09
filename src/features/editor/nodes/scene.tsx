import { BaseHandle } from '@/components/base-handle';
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from '@/components/base-node';
import { LabeledHandle } from '@/components/labeled-handle';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import {
  Position,
  useReactFlow,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import { Image, Pencil } from 'lucide-react';
import { useState } from 'react';

type SceneNodeType = Node<
  {
    headline: string;
    text: string;
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
    <BaseNode className="bg-indigo-50 border-indigo-700">
      <BaseNodeHeader>
        <Image className="text-indigo-800" />
        <BaseNodeHeaderTitle className="text-indigo-800">
          {data.headline ?? (
            <span className="text-indigo-700/50">Scene has no headline</span>
          )}
        </BaseNodeHeaderTitle>
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
                  option1: fdOrNull(formData.get('option1')),
                  option2: fdOrNull(formData.get('option2')),
                  option3: fdOrNull(formData.get('option3')),
                });
                setOpen(false);
              }}
              className="gap-4 grid"
            >
              <DialogHeader>
                <DialogTitle>Configure Scene</DialogTitle>
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

              <Label>Options:</Label>
              <Input
                placeholder="Option 1"
                name="option1"
                defaultValue={data.option1}
              />
              <Input
                placeholder="Option 2"
                name="option2"
                defaultValue={data.option2}
              />
              <Input
                placeholder="Option 3"
                name="option3"
                defaultValue={data.option3}
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
        <p className="font-mono text-xs bg-white border border-indigo-700 p-2 rounded-md">
          {data.text ?? 'No text'}
        </p>
        <BaseHandle type="target" position={Position.Left} />
        <LabeledHandle
          type="source"
          position={Position.Right}
          title={data.option1 ?? <NotUsed />}
          id="option1"
        />
        <LabeledHandle
          type="source"
          position={Position.Right}
          title={data.option2 ?? <NotUsed />}
          id="option2"
        />
        <LabeledHandle
          type="source"
          position={Position.Right}
          title={data.option3 ?? <NotUsed />}
          id="option3"
        />
      </BaseNodeContent>
    </BaseNode>
  );
}

function NotUsed() {
  return <span className="text-gray-400">Not in use</span>;
}
