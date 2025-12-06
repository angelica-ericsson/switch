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
      pushChoice(node.id, option, node.data?.eventId ?? node.id);
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
        <p className="text-xl text-pretty hyphens-auto whitespace-pre-line">
          <Trans
            i18nKey={gameVariant === 'A' ? node.data.textA! : node.data.textB!}
            components={{
              b: <span className="font-bold" />,
            }}
          />
        </p>
        <div className="mt-8 flex flex-col gap-7">
          {((gameVariant === 'A' && node.data?.option1A) || (gameVariant === 'B' && node.data?.option1B)) &&
            availableOptions.includes('option1') && (
              <GameButton onClick={() => handleOptionClick('option1')} style={{ order: buttonOrder.option1 }}>
                {t(gameVariant === 'A' ? node.data.option1A! : node.data.option1B!)}
              </GameButton>
            )}
          {((gameVariant === 'A' && node.data?.option2A) || (gameVariant === 'B' && node.data?.option2B)) &&
            availableOptions.includes('option2') && (
              <GameButton onClick={() => handleOptionClick('option2')} style={{ order: buttonOrder.option2 }}>
                {t(gameVariant === 'A' ? node.data.option2A! : node.data.option2B!)}
              </GameButton>
            )}
          {((gameVariant === 'A' && node.data?.option3A) || (gameVariant === 'B' && node.data?.option3B)) &&
            availableOptions.includes('option3') && (
              <GameButton onClick={() => handleOptionClick('option3')} style={{ order: buttonOrder.option3 }}>
                {t(gameVariant === 'A' ? node.data.option3A! : node.data.option3B!)}
              </GameButton>
            )}
        </div>
      </div>
    </GameLayout>
  );
}
