import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { Button } from '@/components/ui/button';
import { useConsentStore } from '@/features/onboarding/consentStore';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isValid = useConsentStore((state) => state.isValid);

  const handleStartGame = () => {
    if (isValid()) {
      navigate({ to: '/game' });
    } else {
      navigate({ to: '/consent' });
    }
  };

  const handleLanguageChange = (lang: 'en' | 'sv') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Large headline in center */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-12">{t('welcome.headline')}</h1>

      {/* Language buttons - smaller, below headline */}
      <div className="flex gap-3 mb-16">
        <Button variant={i18n.resolvedLanguage === 'en' ? 'default' : 'outline'} size="sm" onClick={() => handleLanguageChange('en')}>
          English
        </Button>
        <Button variant={i18n.resolvedLanguage === 'sv' ? 'default' : 'outline'} size="sm" onClick={() => handleLanguageChange('sv')}>
          Svenska
        </Button>
      </div>

      {/* Start game button - bigger, further down */}
      <Button size="lg" onClick={handleStartGame} className="text-lg px-8 py-6">
        {t('welcome.button')}
      </Button>
    </div>
  );
}
