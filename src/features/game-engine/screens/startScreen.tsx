import { Button } from '@/components/ui/button';
import { ScreenLayout } from './screenLayout';
import { useGameState } from '../state';
import { useTranslation } from 'react-i18next';

export function StartScreen() {
  const { t } = useTranslation();
  const moveForward = useGameState((state) => state.moveForward);

  const handleStartClick = () => {
    moveForward('default');
  };

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold">{t('welcome.headline')}</h1>
        <p className="text-lg text-muted-foreground">
          {t('welcome.description')}
        </p>
        <Button onClick={handleStartClick} className="mt-8">
          {t('welcome.button')}
        </Button>
      </div>
    </ScreenLayout>
  );
}
