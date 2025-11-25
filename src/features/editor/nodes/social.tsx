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
    text1A: string;
    text1B: string;
    text2A: string;
    text2B: string;
    text3A: string;
    text3B: string;
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
                  text1A: fdOrNull(formData.get('text1A')),
                  text1B: fdOrNull(formData.get('text1B')),
                  text2A: fdOrNull(formData.get('text2A')),
                  text2B: fdOrNull(formData.get('text2B')),
                  text3A: fdOrNull(formData.get('text3A')),
                  text3B: fdOrNull(formData.get('text3B')),
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
                <Label>Account 1:</Label>
                <NativeSelect name="userName1" defaultValue={data.userName1 || ''}>
                  <option value="">Select an account...</option>
                  {fakeData.map((account) => (
                    <option key={account.userName} value={account.userName}>
                      {account.displayName} (@{account.userName})
                    </option>
                  ))}
                </NativeSelect>
                <Label>Translation Key for Text 1 - Variant A:</Label>
                <Input placeholder="Text 1 Variant A" name="text1A" defaultValue={data.text1A} />
                <Label>Translation Key for Text 1 - Variant B:</Label>
                <Input placeholder="Text 1 Variant B" name="text1B" defaultValue={data.text1B} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Account 2:</Label>
                <NativeSelect name="userName2" defaultValue={data.userName2 || ''}>
                  <option value="">Select an account...</option>
                  {fakeData.map((account) => (
                    <option key={account.userName} value={account.userName}>
                      {account.displayName} (@{account.userName})
                    </option>
                  ))}
                </NativeSelect>
                <Label>Translation Key for Text 2 - Variant A:</Label>
                <Input placeholder="Text 2 Variant A" name="text2A" defaultValue={data.text2A} />
                <Label>Translation Key for Text 2 - Variant B:</Label>
                <Input placeholder="Text 2 Variant B" name="text2B" defaultValue={data.text2B} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Account 3:</Label>
                <NativeSelect name="userName3" defaultValue={data.userName3 || ''}>
                  <option value="">Select an account...</option>
                  {fakeData.map((account) => (
                    <option key={account.userName} value={account.userName}>
                      {account.displayName} (@{account.userName})
                    </option>
                  ))}
                </NativeSelect>
                <Label>Translation Key for Text 3 - Variant A:</Label>
                <Input placeholder="Text 3 Variant A" name="text3A" defaultValue={data.text3A} />
                <Label>Translation Key for Text 3 - Variant B:</Label>
                <Input placeholder="Text 3 Variant B" name="text3B" defaultValue={data.text3B} />
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
            <p className="mb-1 text-sm font-semibold">Tweet 1:</p>
            {data.userName1 && <p className="mb-1 text-xs text-gray-600">Account: @{data.userName1}</p>}
            <div className="grid grid-cols-2 gap-1">
              <div>
                <p className="mb-1 text-xs font-semibold">Variant A:</p>
                <p className="line-clamp-2 rounded-md border border-green-700 bg-white p-2 text-xs">{data.text1A ?? 'No text'}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold">Variant B:</p>
                <p className="line-clamp-2 rounded-md border border-green-700 bg-white p-2 text-xs">{data.text1B ?? 'No text'}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Tweet 2:</p>
            {data.userName2 && <p className="mb-1 text-xs text-gray-600">Account: @{data.userName2}</p>}
            <div className="grid grid-cols-2 gap-1">
              <div>
                <p className="mb-1 text-xs font-semibold">Variant A:</p>
                <p className="line-clamp-2 rounded-md border border-green-700 bg-white p-2 text-xs">{data.text2A ?? 'No text'}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold">Variant B:</p>
                <p className="line-clamp-2 rounded-md border border-green-700 bg-white p-2 text-xs">{data.text2B ?? 'No text'}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Tweet 3:</p>
            {data.userName3 && <p className="mb-1 text-xs text-gray-600">Account: @{data.userName3}</p>}
            <div className="grid grid-cols-2 gap-1">
              <div>
                <p className="mb-1 text-xs font-semibold">Variant A:</p>
                <p className="line-clamp-2 rounded-md border border-green-700 bg-white p-2 text-xs">{data.text3A ?? 'No text'}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold">Variant B:</p>
                <p className="line-clamp-2 rounded-md border border-green-700 bg-white p-2 text-xs">{data.text3B ?? 'No text'}</p>
              </div>
            </div>
          </div>
        </div>
        <BaseHandle type="target" position={Position.Top} />
        <BaseHandle type="source" position={Position.Bottom} />
      </BaseNodeContent>
    </BaseNode>
  );
}
