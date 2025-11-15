import { ScreenLayout } from './screenLayout';
import type { EndNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';

interface EndScreenProps {
  node: EndNodeType;
}

export function EndScreen({ node }: EndScreenProps) {
  const { t } = useTranslation();

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6 text-center">
        {node.data?.headline && <h1 className="text-4xl font-bold">{t(node.data.headline)}</h1>}
        {node.data?.text && <p className="text-lg text-muted-foreground whitespace-pre-wrap">{t(node.data.text)}</p>}
      </div>
    </ScreenLayout>
  );
}
