import { NumberTicker } from '@/components/ui/number-ticker';
import { useGameState } from '../state';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

export function StatusBar(props: React.PropsWithChildren) {
  const points = useGameState((state) => state.points);
  const state = useGameState((state) => state);

  const sentimentPro = useGameState((state) => state.sentimentPro);
  const sentimentNeutral = useGameState((state) => state.sentimentNeutral);
  const sentimentAgainst = useGameState((state) => state.sentimentAgainst);
  const totalSentiment = sentimentNeutral + sentimentPro + sentimentAgainst;

  const { t } = useTranslation();

  return (
    <div>
      {/* Status Bar */}
      <div className="w-full border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {/* Points Section */}
            <div className="flex items-center gap-4">
              <div className="font-semibold text-muted-foreground">
                {t('headerBar.points')} <NumberTicker value={points} />
              </div>
            </div>

            {/* Sentiment Section */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">{t('headerBar.sentiment')} </span>
              <div className="flex h-4 rounded w-40 overflow-hidden">
                <div className="bg-green-600 transition-all" style={{ width: `${(sentimentPro / totalSentiment) * 100}%` }}></div>
                <div
                  className="bg-gray-600 transition-all"
                  style={{
                    width: `${(sentimentNeutral / totalSentiment) * 100}%`,
                  }}
                ></div>
                <div
                  className="bg-red-600 transition-all"
                  style={{
                    width: `${(sentimentAgainst / totalSentiment) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Language switcher */}
            <div className="flex items-center gap-4 cursor-pointer">
              {i18n.resolvedLanguage === 'en' ? (
                <div onClick={() => i18n.changeLanguage('sv')}>Svenska</div>
              ) : (
                <div onClick={() => i18n.changeLanguage('en')}>English</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full">{props.children}</div>
      </div>

      {/* Main Content */}
      <div className="flex gap-4">
        {Object.entries(state).map((entry) => {
          if (typeof entry[1] === 'function' || typeof entry[1] === 'object') return;
          return (
            <div key={entry[0]}>
              {entry[0]}: {JSON.stringify(entry[1])}
            </div>
          );
        })}
      </div>
    </div>
  );
}
