import { useState } from 'react';
import { useGameState } from '../state';
import type { NewsFlashNodeType } from '../zod-schema';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react';
import { GameLayout } from '../layout/gameLayout';

interface NewsFlashScreenProps {
  node: NewsFlashNodeType;
}

export function NewsFlashScreen({ node }: NewsFlashScreenProps) {
  const gameVariant = useGameState((state) => state.gameVariant);
  const moveForward = useGameState((state) => state.moveForward);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      // Advance the game
      moveForward('default');
    }
  };

  // Select variant-specific content
  const headline = gameVariant === 'A' ? node.data.headlineA : node.data.headlineB;
  const text = gameVariant === 'A' ? node.data.textA : node.data.textB;

  return (
    <GameLayout>
      <div className="flex items-center justify-center min-h-screen">
        <Button onClick={() => setDialogOpen(true)} size="lg" className="flex items-center gap-2">
          <Newspaper className="size-5" />
          Breaking News!
        </Button>
      </div>
      <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" showCloseButton={true}>
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="size-6 text-amber-800" />
              <DialogTitle className="text-3xl font-bold text-amber-900">News Article</DialogTitle>
            </div>
          </DialogHeader>
          <div className="space-y-6">
            {node.data.imageUrl && (
              <div className="w-full">
                <img
                  src={node.data.imageUrl}
                  alt={headline || 'News image'}
                  className="w-full h-auto rounded-lg object-cover"
                  onError={(e) => {
                    // Hide image if it fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            {headline && <h1 className="text-4xl font-bold leading-tight text-gray-900 border-b-2 border-gray-300 pb-4">{headline}</h1>}
            {text && (
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">{text}</p>
              </div>
            )}
            {!headline && !text && !node.data.imageUrl && <p className="text-muted-foreground">No content available</p>}
          </div>
        </DialogContent>
      </Dialog>
    </GameLayout>
  );
}
