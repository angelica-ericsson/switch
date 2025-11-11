import { ScreenLayout } from './screenLayout';
import type { EndNodeType } from '../zod-schema';

interface EndScreenProps {
  node: EndNodeType;
}

export function EndScreen({ node }: EndScreenProps) {
  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6 text-center">
        {node.data?.headline && (
          <h1 className="text-4xl font-bold">{node.data.headline}</h1>
        )}
        {node.data?.text && (
          <p className="text-lg text-muted-foreground whitespace-pre-wrap">
            {node.data.text}
          </p>
        )}
        {!node.data?.headline && !node.data?.text && (
          <h1 className="text-4xl font-bold">Game Over</h1>
        )}
      </div>
    </ScreenLayout>
  );
}
