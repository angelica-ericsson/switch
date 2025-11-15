import { Button } from '@/components/ui/button';
import { ScreenLayout } from './screenLayout';
import { useGameState } from '../state';
import type { SceneNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';

interface SceneScreenProps {
  node: SceneNodeType;
}

export function SceneScreen({ node }: SceneScreenProps) {
  const gameVariant = useGameState((state) => state.gameVariant);
  const moveForward = useGameState((state) => state.moveForward);
  const edges = useGameState((state) => state.edges);

  const edge = edges.get(node.id);
  const availableOptions = edge ? Object.keys(edge).filter((key) => key !== 'default') : [];

  const handleOptionClick = (option: string) => {
    moveForward(option);
  };

  const { t } = useTranslation();

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        {gameVariant === 'A' && (
          <p className="text-lg text-muted-foreground whitespace-pre-line text-pretty">{node.data.textA ? t(node.data.textA) : ''}</p>
        )}
        {gameVariant === 'B' && (
          <p className="text-lg text-muted-foreground whitespace-pre-line text-pretty">{node.data.textB ? t(node.data.textB) : ''}</p>
        )}
        <div className="flex flex-col gap-3 mt-8">
          {node.data?.option1 && availableOptions.includes('option1') && (
            <Button onClick={() => handleOptionClick('option1')}>{t(node.data.option1)}</Button>
          )}
          {node.data?.option2 && availableOptions.includes('option2') && (
            <Button onClick={() => handleOptionClick('option2')}>{t(node.data.option2)}</Button>
          )}
          {node.data?.option3 && availableOptions.includes('option3') && (
            <Button onClick={() => handleOptionClick('option3')}>{t(node.data.option3)}</Button>
          )}
        </div>
      </div>
    </ScreenLayout>
  );
}
