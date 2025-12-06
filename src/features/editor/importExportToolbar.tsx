import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Field, FieldError } from '@/components/ui/field';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Panel } from '@xyflow/react';
import { useReactFlow } from '@xyflow/react';
import { FileInput, Save, Check, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ImportExportToolbar() {
  return (
    <Panel position="top-right">
      <ButtonGroup>
        <ImportDialog />
        <ExportDialog />
        <Button variant="outline" asChild>
          <a href="/#load=localstorage&variant=A" target="_blank">
            <Rocket />
            Launch A
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/#load=localstorage&variant=B" target="_blank">
            <Rocket />
            Launch B
          </a>
        </Button>
      </ButtonGroup>
    </Panel>
  );
}

function ImportDialog() {
  const reactFlow = useReactFlow();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileInput />
          Import
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form
          action={(formData) => {
            try {
              const raw = formData.get('json');
              if (typeof raw !== 'string') throw Error('Import data is not a string');
              const parsed = JSON.parse(raw);
              if (!Array.isArray(parsed.nodes) || !Array.isArray(parsed.edges)) throw Error('Data has the wrong format');

              reactFlow.setNodes(parsed.nodes);
              reactFlow.setEdges(parsed.edges);
              setErrorText(null);
              setOpen(false);
            } catch (e) {
              setErrorText((e as Error).message);
            }
          }}
          className="grid gap-4"
        >
          <DialogHeader>
            <DialogTitle>Import Game Data</DialogTitle>
          </DialogHeader>

          <Field data-invalid={errorText !== null}>
            <Textarea
              name="json"
              className="h-60"
              defaultValue={text}
              aria-invalid={errorText !== null}
              onChange={(e) => setText(e.currentTarget.value)}
            />
            {errorText && <FieldError>{errorText}</FieldError>}
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button type="submit">Load</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ExportDialog() {
  const reactFlow = useReactFlow();
  const jsonExport = JSON.stringify({ nodes: reactFlow.getNodes(), edges: reactFlow.getEdges() }, null, 2);

  const [hasCopied, setHasCopied] = useState(false);
  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  }, [hasCopied]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Save />
          Export
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-fit">
        <DialogHeader>
          <DialogTitle>Copy Game Data</DialogTitle>
        </DialogHeader>

        <Button
          onClick={() => {
            navigator.clipboard.writeText(jsonExport);
            setHasCopied(true);
          }}
        >
          {hasCopied ? <Check /> : <Save />}
          {hasCopied ? 'copied!' : 'Copy to clipboard'}
        </Button>
        <ScrollArea className="h-72 rounded-md border">
          <pre className="bg-muted max-w-[80vw] rounded p-3 font-mono text-xs font-light wrap-anywhere">{jsonExport}</pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
