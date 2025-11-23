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
      <div className="postcard-bg max-w-[500px] -rotate-10 rounded-xl p-5 shadow-xl lg:translate-x-5">
        <img src={imagePath} className="rounded object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="postcard-bg rotate-5 rounded-xl p-5 shadow-xl lg:-translate-x-5">
        <h1 className="font-script pb-5 text-4xl font-bold">{t('welcome.headline')}</h1>
        <p className="font-script max-w-[500px] text-xl whitespace-pre-line">
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
