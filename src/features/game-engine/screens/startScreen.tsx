import { useGameState } from '../state';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { useDemographicStore } from '@/features/onboarding/demographicStore';
import imagePath from '@/assets/pexels-tomfisk-13777960.jpg';

export function StartScreen() {
  const { t } = useTranslation();
  const alias = useDemographicStore((state) => state.alias);
  const updateField = useDemographicStore((state) => state.updateField);
  const moveForward = useGameState((state) => state.moveForward);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      moveForward('default');
    }
  };

  const handleAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('alias', e.target.value);
  };

  return (
    <GameLayout>
      <div className="p-5 postcard-bg rounded-xl shadow-xl -rotate-10 max-w-[500px] lg:translate-x-5">
        <img src={imagePath} className="object-cover rounded" />
      </div>
      <form onSubmit={handleSubmit} className="p-5 postcard-bg rounded-xl shadow-xl rotate-5 lg:-translate-x-5">
        <h1 className="text-4xl font-bold font-script pb-5">{t('welcome.headline')}</h1>
        <p className="font-script text-xl max-w-[500px] whitespace-pre-line">
          {t('welcome.description1')}{' '}
          <input
            className="border-b-2 border-dotted border-black/50 font-mono"
            name="alias"
            size={20}
            value={alias}
            onChange={handleAliasChange}
            required
          />{' '}
          {t('welcome.description2')}
        </p>

        <GameButton type="submit" className="mt-8">
          {t('welcome.button')}
        </GameButton>
      </form>
    </GameLayout>
  );
}
