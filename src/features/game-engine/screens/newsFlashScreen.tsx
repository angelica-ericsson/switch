import { useGameState } from '../state';
import type { NewsFlashNodeType } from '../zod-schema';
import { GameLayout } from '../layout/gameLayout';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

interface NewsFlashScreenProps {
  node: NewsFlashNodeType;
}

export function NewsFlashScreen({ node }: NewsFlashScreenProps) {
  const gameVariant = useGameState((state) => state.gameVariant);
  const moveForward = useGameState((state) => state.moveForward);
  const { t } = useTranslation();

  // Select variant-specific content
  const headline = gameVariant === 'A' ? node.data.headlineA : node.data.headlineB;
  const text = gameVariant === 'A' ? node.data.textA : node.data.textB;

  const handleClick = () => {
    moveForward('default');
  };

  // Format date in newspaper style - use configured date or fallback to current date
  const dateToDisplay = node.data.date ? new Date(node.data.date) : new Date();
  const formattedDate = dateToDisplay.toLocaleDateString(i18n.resolvedLanguage, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <GameLayout>
      <div className="max-w-4xl p-12 newspaper-bg rotate-2 font-serif cursor-pointer" onClick={handleClick}>
        <div className="newspaper-layer -z-4 rotate-[-4deg] -translate-x-5 translate-y-2.5 "></div>
        <div className="newspaper-layer -z-3 -rotate-2 -translate-x-1.5 translate-y-1 "></div>
        <div className="newspaper-layer -z-2 rotate-2 -translate-x-0.5 translate-y-0.5 "></div>
        <div className="newspaper-layer -z-1"></div>
        {/* Newspaper Header */}
        <div className="border-b-4 border-black/70 mb-6 pb-4">
          <div className="text-center mb-2">
            <h1 className="text-6xl font-black font-serif tracking-tight text-black/70 mb-2 uppercase">{t('newsFlash.newspaperName')}</h1>
            <div className="flex justify-between items-center text-sm text-gray-600 border-t-2 border-b-2 border-black/70 py-2">
              <span className="font-semibold capitalize">{formattedDate}</span>
              <span className="font-semibold capitalize">{t('newsFlash.price')}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Headline */}
          {headline && (
            <h2 className="text-5xl italic font-serif leading-tight text-black/70 border-b-4 border-black/70 pb-4 text-center">
              {headline}
            </h2>
          )}

          {/* Image and Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Column */}
            {node.data.imageUrl && (
              <div className="md:col-span-1">
                <img
                  src={node.data.imageUrl}
                  alt={headline || 'News image'}
                  className="w-full h-auto border-2 border-black/70 object-cover newspaper-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {headline && (
                  <p className="text-xs italic text-gray-600 mt-2 border-t border-gray-400 pt-2">Photo: {t('newsFlash.newspaperName')}</p>
                )}
              </div>
            )}

            {/* Text Columns */}
            {text && (
              <div className={`columns-1 gap-6 text-justify`}>
                <p className="text-base leading-relaxed text-black/70 mb-4 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none whitespace-pre-line">
                  {text}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t-2 border-black/70 pt-4 mt-8">
            <p className="text-center text-gray-800/90 italic">Click anywhere to continue...</p>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
