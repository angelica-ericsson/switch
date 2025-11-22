import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeader, BaseNodeHeaderTitle } from '@/components/base-node';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import { Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { Newspaper, Pencil } from 'lucide-react';
import { useState } from 'react';

type NewsFlashNodeType = Node<
  {
    headline: string;
    text: string;
    imageUrl: string;
  },
  'newsFlash'
>;

export function NewsFlashNode({ data, id }: NodeProps<NewsFlashNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="bg-amber-50 border-amber-700 max-w-[500px]">
      <BaseNodeHeader>
        <Newspaper className="text-amber-800" />
        <BaseNodeHeaderTitle className="text-amber-800">News Flash</BaseNodeHeaderTitle>
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
                  headline: fdOrNull(formData.get('headline')),
                  text: fdOrNull(formData.get('text')),
                  imageUrl: fdOrNull(formData.get('imageUrl')),
                });
                setOpen(false);
              }}
              className="gap-4 grid"
            >
              <DialogHeader>
                <DialogTitle>Configure News Flash</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-2">
                <Label>Headline:</Label>
                <Input placeholder="Headline" name="headline" defaultValue={data.headline} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Text:</Label>
                <Input placeholder="Text" name="text" defaultValue={data.text} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Image URL:</Label>
                <Input placeholder="Image URL" name="imageUrl" defaultValue={data.imageUrl} />
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
        <div className="flex flex-col gap-2">
          <div>
            <p className="font-semibold text-sm mb-1">Headline:</p>
            <p className="bg-white border border-amber-700 p-2 rounded-md line-clamp-2">{data.headline ?? 'No headline'}</p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Text:</p>
            <p className="bg-white border border-amber-700 p-2 rounded-md line-clamp-3">{data.text ?? 'No text'}</p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Image URL:</p>
            <p className="bg-white border border-amber-700 p-2 rounded-md line-clamp-2 text-sm">{data.imageUrl ?? 'No image URL'}</p>
          </div>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <BaseHandle type="source" position={Position.Bottom} />
      </BaseNodeContent>
    </BaseNode>
  );
}
