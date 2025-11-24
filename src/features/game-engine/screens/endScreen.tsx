import type { EndNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';

interface EndScreenProps {
  node: EndNodeType;
}

export function EndScreen({ node }: EndScreenProps) {
  const { t } = useTranslation();

  return (
    <GameLayout>
      <div className="mx-auto max-w-2xl space-y-6 p-8 text-center">
        {node.data?.headline && <h1 className="text-4xl font-bold">{t(node.data.headline)}</h1>}
        {node.data?.text && <p className="text-muted-foreground text-lg whitespace-pre-wrap">{t(node.data.text)}</p>}
      </div>
    </GameLayout>
  );
}
