import { useMemo } from 'react';
import { useGameState } from '../state';
import type { SceneNodeType } from '../zod-schema';
import { Trans, useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';

interface SceneScreenProps {
  node: SceneNodeType;
}

export function SceneScreen({ node }: SceneScreenProps) {
  const gameVariant = useGameState((state) => state.gameVariant);
  const moveForward = useGameState((state) => state.moveForward);
  const edges = useGameState((state) => state.edges);
  const pushChoice = useGameState((state) => state.pushChoice);

  const edge = edges.get(node.id);
  const availableOptions = edge ? Object.keys(edge).filter((key) => key !== 'default') : [];

  const handleOptionClick = (option: string) => {
    if (availableOptions.length > 1) {
      pushChoice(gameVariant === 'A' ? node.data.textA! : node.data.textB!, option);
    }
    moveForward(option);
  };

  const { t } = useTranslation();

  // Generate random order for buttons using CSS flex order
  const buttonOrder = useMemo(
    () => ({
      option1: Math.floor(Math.random() * 1000),
      option2: Math.floor(Math.random() * 1000),
      option3: Math.floor(Math.random() * 1000),
    }),
    [],
  );

  return (
    <GameLayout>
      <div className="intro-screens-bg border-eastbay-900 mx-auto max-w-3xl space-y-6 rounded-2xl border-3 p-8 shadow-2xl">
        <p className="text-xl text-pretty whitespace-pre-line">
          <Trans
            i18nKey={gameVariant === 'A' ? node.data.textA! : node.data.textB!}
            components={{
              b: <span className="font-bold" />,
            }}
          />
        </p>
        <div className="mt-8 flex flex-col gap-7">
          {node.data?.option1 && availableOptions.includes('option1') && (
            <GameButton onClick={() => handleOptionClick('option1')} style={{ order: buttonOrder.option1 }}>
              {t(node.data.option1)}
            </GameButton>
          )}
          {node.data?.option2 && availableOptions.includes('option2') && (
            <GameButton onClick={() => handleOptionClick('option2')} style={{ order: buttonOrder.option2 }}>
              {t(node.data.option2)}
            </GameButton>
          )}
          {node.data?.option3 && availableOptions.includes('option3') && (
            <GameButton onClick={() => handleOptionClick('option3')} style={{ order: buttonOrder.option3 }}>
              {t(node.data.option3)}
            </GameButton>
          )}
        </div>
      </div>
    </GameLayout>
  );
}
