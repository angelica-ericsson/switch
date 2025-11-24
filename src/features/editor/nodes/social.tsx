import { BaseHandle } from '@/components/base-handle';
import { BaseNode, BaseNodeContent, BaseNodeHeader, BaseNodeHeaderTitle } from '@/components/base-node';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect } from '@/components/ui/native-select';
import { fdOrNull } from '@/lib/editorNodeHelpers';
import { Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { Users, Pencil } from 'lucide-react';
import { useState } from 'react';
import { fakeData } from '@/features/game-engine/constants';

type SocialNodeType = Node<
  {
    text1: string;
    text2: string;
    text3: string;
    userName1: string;
    userName2: string;
    userName3: string;
  },
  'social'
>;

export function SocialNode({ data, id }: NodeProps<SocialNodeType>) {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <BaseNode className="max-w-[500px] border-green-700 bg-green-50">
      <BaseNodeHeader>
        <Users className="text-green-800" />
        <BaseNodeHeaderTitle className="text-green-800">Social</BaseNodeHeaderTitle>
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
                  text1: fdOrNull(formData.get('text1')),
                  text2: fdOrNull(formData.get('text2')),
                  text3: fdOrNull(formData.get('text3')),
                  userName1: fdOrNull(formData.get('userName1')),
                  userName2: fdOrNull(formData.get('userName2')),
                  userName3: fdOrNull(formData.get('userName3')),
                });
                setOpen(false);
              }}
              className="grid gap-4"
            >
              <DialogHeader>
                <DialogTitle>Configure Social</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-2">
                <Label>Text 1:</Label>
                <Input placeholder="Text 1" name="text1" defaultValue={data.text1} />
                <Label>Account 1:</Label>
                <NativeSelect name="userName1" defaultValue={data.userName1 || ''}>
                  <option value="">Select an account...</option>
                  {fakeData.map((account) => (
                    <option key={account.userName} value={account.userName}>
                      {account.displayName} (@{account.userName})
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Text 2:</Label>
                <Input placeholder="Text 2" name="text2" defaultValue={data.text2} />
                <Label>Account 2:</Label>
                <NativeSelect name="userName2" defaultValue={data.userName2 || ''}>
                  <option value="">Select an account...</option>
                  {fakeData.map((account) => (
                    <option key={account.userName} value={account.userName}>
                      {account.displayName} (@{account.userName})
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Text 3:</Label>
                <Input placeholder="Text 3" name="text3" defaultValue={data.text3} />
                <Label>Account 3:</Label>
                <NativeSelect name="userName3" defaultValue={data.userName3 || ''}>
                  <option value="">Select an account...</option>
                  {fakeData.map((account) => (
                    <option key={account.userName} value={account.userName}>
                      {account.displayName} (@{account.userName})
                    </option>
                  ))}
                </NativeSelect>
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
            <p className="mb-1 text-sm font-semibold">Text 1:</p>
            <p className="line-clamp-3 rounded-md border border-green-700 bg-white p-2">{data.text1 ?? 'No text'}</p>
            {data.userName1 && <p className="mt-1 text-xs text-gray-600">Account: @{data.userName1}</p>}
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Text 2:</p>
            <p className="line-clamp-3 rounded-md border border-green-700 bg-white p-2">{data.text2 ?? 'No text'}</p>
            {data.userName2 && <p className="mt-1 text-xs text-gray-600">Account: @{data.userName2}</p>}
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Text 3:</p>
            <p className="line-clamp-3 rounded-md border border-green-700 bg-white p-2">{data.text3 ?? 'No text'}</p>
            {data.userName3 && <p className="mt-1 text-xs text-gray-600">Account: @{data.userName3}</p>}
          </div>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <BaseHandle type="source" position={Position.Bottom} />
      </BaseNodeContent>
    </BaseNode>
  );
}
