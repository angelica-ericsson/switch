import { useGameState, getDateFromDaysSinceStart } from '../state';
import type { NewsFlashNodeType } from '../zod-schema';
import { GameLayout } from '../layout/gameLayout';
import { useTranslation, Trans } from 'react-i18next';
import i18n from '@/i18n';
import { GameButton } from '@/components/ui/gameButton';

interface NewsFlashScreenProps {
  node: NewsFlashNodeType;
}

export function NewsFlashScreen({ node }: NewsFlashScreenProps) {
  const gameVariant = useGameState((state) => state.gameVariant);
  const daysSinceGameStart = useGameState((state) => state.daysSinceGameStart);
  const moveForward = useGameState((state) => state.moveForward);
  const { t } = useTranslation();

  // Select variant-specific content
  const headline = gameVariant === 'A' ? node.data.headlineA : node.data.headlineB;
  const text = gameVariant === 'A' ? node.data.textA : node.data.textB;

  const handleContinue = () => {
    moveForward('default');
  };

  // Calculate date from daysSinceGameStart (use node's value if present, otherwise use state's value)
  const daysForDisplay = node.data?.daysSinceGameStart ?? daysSinceGameStart;
  const dateToDisplay = getDateFromDaysSinceStart(daysForDisplay);
  const formattedDate = dateToDisplay.toLocaleDateString(i18n.resolvedLanguage, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <GameLayout>
      <div className="newspaper-bg max-w-5xl rotate-0 p-12 font-serif md:rotate-2">
        <div className="newspaper-layer -z-3 -translate-x-1.5 translate-y-1 -rotate-2"></div>
        <div className="newspaper-layer -z-2 -translate-x-0.5 translate-y-0.5 rotate-2"></div>
        <div className="newspaper-layer -z-1"></div>
        {/* Newspaper Header */}
        <div className="mb-6 border-b-4 border-black/70 pb-4">
          <div className="mb-2 text-center">
            <h1 className="mb-2 font-serif text-6xl font-black tracking-tight text-black/70 uppercase">{t('newsFlash.newspaperName')}</h1>
            <div className="flex items-center justify-between border-t-2 border-b-2 border-black/70 py-2 text-sm text-gray-600">
              <span className="font-semibold capitalize">{formattedDate}</span>
              <span className="font-semibold capitalize">{t('newsFlash.price')}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Headline */}
          {headline && (
            <h2 className="leading-tighter border-b-4 border-black/70 pb-4 text-center font-serif text-4xl text-black/70 italic">
              {t(headline)}
            </h2>
          )}

          {/* Image and Text Layout */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Image Column */}
            {node.data.imageUrl && (
              <div className="md:col-span-1">
                <div className="newspaper-img-bg">
                  <img
                    src={'/' + node.data.imageUrl}
                    className="newspaper-image h-auto w-full border-2 border-black/70 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <p className="mt-2 border-t border-gray-400 pt-2 text-xs text-gray-600 italic">
                  {t('newsFlash.photo')}: {t('newsFlash.newspaperName')}
                </p>
              </div>
            )}

            {/* Text Columns */}
            {text && (
              <div className={`gap-6 text-justify text-pretty md:col-span-2 md:columns-2`}>
                <p className="mb-4 text-base leading-relaxed whitespace-pre-line text-black/70 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-none first-letter:font-bold">
                  <Trans
                    i18nKey={text}
                    components={{
                      b: <span className="font-bold" />,
                    }}
                  />
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 border-t-2 border-black/70 pt-4 text-center font-sans">
            <GameButton onClick={handleContinue}>{t('continue')}</GameButton>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
