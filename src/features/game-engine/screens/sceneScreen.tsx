import { useGameState } from '../state';
import type { SceneNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';

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
    <GameLayout>
      <div className="intro-screens-bg border-eastbay-900 mx-auto max-w-3xl space-y-6 rounded-2xl border-3 p-8 shadow-2xl">
        <p className="text-xl text-pretty whitespace-pre-line">{gameVariant === 'A' ? t(node.data.textA!) : t(node.data.textB!)}</p>
        <div className="mt-8 flex flex-col gap-7">
          {node.data?.option1 && availableOptions.includes('option1') && (
            <GameButton onClick={() => handleOptionClick('option1')}>{t(node.data.option1)}</GameButton>
          )}
          {node.data?.option2 && availableOptions.includes('option2') && (
            <GameButton onClick={() => handleOptionClick('option2')}>{t(node.data.option2)}</GameButton>
          )}
          {node.data?.option3 && availableOptions.includes('option3') && (
            <GameButton onClick={() => handleOptionClick('option3')}>{t(node.data.option3)}</GameButton>
          )}
        </div>
      </div>
    </GameLayout>
  );
}
