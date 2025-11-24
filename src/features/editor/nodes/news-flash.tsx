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
    headlineA: string;
    headlineB: string;
    textA: string;
    textB: string;
    imageUrl: string;
    daysSinceGameStart: number;
  },
  'newsFlash'
>;

export function NewsFlashNode({ data, id }: NodeProps<NewsFlashNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="max-w-[500px] border-amber-700 bg-amber-50">
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
                  headlineA: fdOrNull(formData.get('headlineA')),
                  headlineB: fdOrNull(formData.get('headlineB')),
                  textA: fdOrNull(formData.get('textA')),
                  textB: fdOrNull(formData.get('textB')),
                  imageUrl: fdOrNull(formData.get('imageUrl')),
                  daysSinceGameStart: Number(formData.get('daysSinceGameStart')) || 0,
                });
                setOpen(false);
              }}
              className="grid gap-4"
            >
              <DialogHeader>
                <DialogTitle>Configure News Flash</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-2">
                <Label>Translation Key for Headline Variant A:</Label>
                <Input placeholder="Headline Variant A" name="headlineA" defaultValue={data.headlineA} />
              </div>
              <div className="flex flex-col gap-2 pb-5">
                <Label>Translation Key for Text Variant A:</Label>
                <Input placeholder="Text Variant A" name="textA" defaultValue={data.textA} />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Translation Key for Headline Variant B:</Label>
                <Input placeholder="Headline Variant B" name="headlineB" defaultValue={data.headlineB} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Translation Key for Text Variant B:</Label>
                <Input placeholder="Text Variant B" name="textB" defaultValue={data.textB} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Image URL:</Label>
                <Input placeholder="Image URL" name="imageUrl" defaultValue={data.imageUrl} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Days since game start:</Label>
                <Input type="number" name="daysSinceGameStart" min="0" defaultValue={data.daysSinceGameStart ?? 0} />
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
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm font-semibold">Variant A:</p>
            <p className="text-sm font-semibold">Variant B:</p>
            <div>
              <p className="mb-1 text-xs font-semibold">Headline:</p>
              <p className="line-clamp-2 rounded-md border border-amber-700 bg-white p-2 text-xs">{data.headlineA ?? 'No headline'}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold">Headline:</p>
              <p className="line-clamp-2 rounded-md border border-amber-700 bg-white p-2 text-xs">{data.headlineB ?? 'No headline'}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold">Text:</p>
              <p className="line-clamp-2 rounded-md border border-amber-700 bg-white p-2 text-xs">{data.textA ?? 'No text'}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold">Text:</p>
              <p className="line-clamp-2 rounded-md border border-amber-700 bg-white p-2 text-xs">{data.textB ?? 'No text'}</p>
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Image URL:</p>
            <p className="line-clamp-2 rounded-md border border-amber-700 bg-white p-2 text-sm">{data.imageUrl ?? 'No image URL'}</p>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Days since game start:</p>
            <p className="rounded-md border border-amber-700 bg-white p-2 text-sm">{data.daysSinceGameStart ?? 0} days</p>
          </div>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <BaseHandle type="source" position={Position.Bottom} />
      </BaseNodeContent>
    </BaseNode>
  );
}
