import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Panel } from '@xyflow/react';
import { useReactFlow } from '@xyflow/react';
import { nanoid } from 'nanoid';
import { Banknote, CirclePlay, CircleStop, Cog, ImagePlus, Shuffle, GitBranch, Newspaper } from 'lucide-react';

export function EditorToolbar() {
  const reactFlow = useReactFlow();

  return (
    <Panel position="top-left">
      <ButtonGroup>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'scene',
              position: pos,
              data: {},
            });
          }}
        >
          <ImagePlus />
          Scene
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'stockUp',
              position: pos,
              data: {},
            });
          }}
        >
          <Banknote /> Stock up
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'setState',
              position: pos,
              data: {},
            });
          }}
        >
          <Cog /> Set Game State
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: 'start',
              type: 'start',
              position: pos,
              data: {},
            });
          }}
        >
          <CirclePlay /> Start Game
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'end',
              position: pos,
              data: {},
            });
          }}
        >
          <CircleStop /> End Game
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'random',
              position: pos,
              data: {},
            });
          }}
        >
          <Shuffle /> Random
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'if',
              position: pos,
              data: {},
            });
          }}
        >
          <GitBranch /> If
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const pos = reactFlow.screenToFlowPosition({ x: 70, y: 70 });
            reactFlow.addNodes({
              id: nanoid(),
              type: 'newsFlash',
              position: pos,
              data: {},
            });
          }}
        >
          <Newspaper /> News Flash
        </Button>
      </ButtonGroup>
    </Panel>
  );
}
