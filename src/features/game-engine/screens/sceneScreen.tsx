import { Button } from '@/components/ui/button';
import { ScreenLayout } from './screenLayout';
import { useGameState } from '../state';
import type { SceneNodeType } from '../zod-schema';

interface SceneScreenProps {
  node: SceneNodeType;
}

export function SceneScreen({ node }: SceneScreenProps) {
  const moveForward = useGameState((state) => state.moveForward);
  const edges = useGameState((state) => state.edges);

  const edge = edges.get(node.id);
  const availableOptions = edge
    ? Object.keys(edge).filter((key) => key !== 'default')
    : [];

  const handleOptionClick = (option: string) => {
    moveForward(option);
  };

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        {node.data?.headline && (
          <h1 className="text-3xl font-bold">{node.data.headline}</h1>
        )}
        {node.data?.text && (
          <p className="text-lg text-muted-foreground whitespace-pre-wrap">
            {node.data.text}
          </p>
        )}
        <div className="flex flex-col gap-3 mt-8">
          {node.data?.option1 && availableOptions.includes('option1') && (
            <Button
              onClick={() => handleOptionClick('option1')}
              size="lg"
              className="w-full justify-start"
            >
              {node.data.option1}
            </Button>
          )}
          {node.data?.option2 && availableOptions.includes('option2') && (
            <Button
              onClick={() => handleOptionClick('option2')}
              size="lg"
              className="w-full justify-start"
            >
              {node.data.option2}
            </Button>
          )}
          {node.data?.option3 && availableOptions.includes('option3') && (
            <Button
              onClick={() => handleOptionClick('option3')}
              size="lg"
              className="w-full justify-start"
            >
              {node.data.option3}
            </Button>
          )}
        </div>
      </div>
    </ScreenLayout>
  );
}
