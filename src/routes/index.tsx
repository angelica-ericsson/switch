import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { useConsentStore } from '@/features/onboarding/consentStore';
import { useInitializeGame } from '@/features/game-engine/useInitializeGame';
import { useDemographicStore } from '@/features/onboarding/demographicStore';
import '../game.css';
import logoUrl from '../assets/logo.svg';
import { GameButton } from '@/components/ui/gameButton';
import { Check } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  useInitializeGame();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isConsentValid = useConsentStore((state) => state.validate);
  const isDemoValid = useDemographicStore((state) => state.validate);

  const handleStartGame = () => {
    if (isConsentValid() && isDemoValid()) {
      navigate({ to: '/game' });
    } else {
      navigate({ to: '/consent' });
    }
  };

  const handleLanguageChange = (lang: 'en' | 'sv') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 game-background">
      {/* Language buttons - smaller, below headline */}
      <div className="flex gap-3 mb-16">
        <GameButton size="sm" onClick={() => handleLanguageChange('en')}>
          {i18n.resolvedLanguage === 'en' ? <Check /> : null}
          English
        </GameButton>
        <GameButton size="sm" onClick={() => handleLanguageChange('sv')}>
          {i18n.resolvedLanguage === 'sv' ? <Check /> : null}
          Svenska
        </GameButton>
      </div>

      <img src={logoUrl} style={{ viewTransitionName: 'logo' }} />

      {/* Large headline in center */}
      <h1 className="text-5xl font-bold text-center m-12 font-script text-white text-shadow-lg text-shadow-eastbay-900">
        {t('welcome.headline')}
      </h1>

      {/* Start game button - bigger, further down */}
      <GameButton size="lg" onClick={handleStartGame} className="text-lg px-8 py-6 animate-bounce">
        {t('welcome.button')}
      </GameButton>
    </div>
  );
}
